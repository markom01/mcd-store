// Products object

function createProduct(name, price, description, images, reviews, features) {

  const imgArray = [];
  for (let i = 0; i < images.length; i++) {
    imgArray.push(require("../images/mcd/" + images[i]));
  }

  return {
      title: name,
      price: price,
      description: description,
      images: imgArray,
      reviews: reviews,
      fileTypes: ["PNG", "JPG"].concat(features.madeIn.fileTypes),
      defaultFeature: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-file-earmark-arrow-down me-2" viewBox="0 0 16 16">
          <path
            d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
          <path
            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>`,
          text: "Digital Download",
      },
      features: features,
    }
  }

function createFeature(category, name, imgSrc, fileTypes, featureList) {
  return {
    category: category,
    madeIn: {
      name: name,
      src: require("../images/mcd/icons/" + imgSrc[0]),
      customIcon: require("../images/mcd/icons/" + imgSrc[1]),
      fileTypes: fileTypes,
    },
    list: featureList,
  }
}

function createFeatureList(icon, text) {
  return {
    icon: icon,
    text: text,
  }
}

const printable = 
  createFeatureList(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      class="bi bi-printer me-2" viewBox="0 0 16 16">
      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
      <path
        d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
    </svg>`,
    "Printable on any size"
  );

const scalable = 
  createFeatureList(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrows-angle-expand me-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
            </svg>`,
    "Scalable with no Quality-loss"
);

const illustrationFeatures = 
  createFeature(
    "Illustrations",
    "Illustrator",
    ["illustrator-icon.svg", "Illustrations.jpg"],
    ["AI", "SVG", "PDF"],
    [printable, scalable]
  );

const visualTuningFeatures = 
  createFeature(
    "Visual Tuning",
    "Photoshop",
    ["photoshop-icon.svg", "Visual-Tuning.jpg"],
    ["PS", "TIFF"],
    []
  );

const supra = 
  createProduct(
    "Toyota Supra",
    10,
    [
      "Lorem ipsum dolor sit amet consectetur",
      "praesentium sed alias ipsa sequi facilis cumque quidem.",
      "Atque neque dignissimos provident?",
      "Rem eum porro fuga, repellat aspernatur inventore aliquam",
      "adipisicing elit eaque ipsam"
    ], 
    [
      "illustrations/Totota-Supra.jpg",
      "illustrations/Totota-Supra-hh-font.jpg"
    ],
    "No reviews yet.",
    illustrationFeatures
    );

const celica = 
  createProduct(
    "Toyota Celica",
    5,
    [
      "Lorem ipsum dolor sit amet consectetur",
      "praesentium sed alias ipsa sequi facilis cumque quidem.",
      "Atque neque dignissimos provident?",
      "Rem eum porro fuga, repellat aspernatur inventore aliquam"
    ], 
    [
      "visual-tuning/Toyota-Celica-Visual-Tuning.jpg"
    ],
    "No reviews yet!",
    visualTuningFeatures
    );



// Icons

/*
Toyota Celica
Lightning McQueen
Ares Design S Project
Toyota Corrola Verso
Opel Astra H GTC
Mercedes AMG One
*/

export { supra, celica };