const cleanArray = (arr) =>
  arr.map((elem) => {
    let image = null;

    if (elem.image && elem.image.url) {
      image = elem.image.url;
    } else if (elem.reference_image_id) {
      if (elem.id === 15 || elem.id === 125 || elem.id === 212) {
        image = `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.png`;
      } else {
        image = `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`;
      }
    }

    return {
      id: elem.id,
      name: elem.name,
      height: elem.height.metric,
      weight: elem.weight.metric,
      life_span: elem.life_span,
      life_span_min: elem.life_span_min,
      life_span_max: elem.life_span_max,
      image,
      created: false,
      temperament: elem.temperament ? elem.temperament.split(', ') : [],
    };
  });

  module.exports=cleanArray;