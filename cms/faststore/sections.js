const widgets = {
  imageUploader: {
    widget: {
      'ui:widget': 'image-uploader',
    },
  },
};

const title = {
  title: 'Title',
  type: 'string',
};

const bannerImage = {
  type: 'object',
  required: ['srcSet'],
  properties: {
    srcSet: {
      title: 'Image',
      type: 'string',
      ...widgets.imageUploader,
    },
  },
};

const ProductDetailsWithCustomButton = {
  title: 'Product Details WithCustom Button',
  requiredScopes: ['pdp'],
  type: 'object',
  description: 'Display Product Details Section with custom button',
  properties: {
    productTitle: {
      title: 'Product Title',
      type: 'object',
      properties: {
        discountBadge: {
          title: 'Discount Badge',
          type: 'object',
          properties: {
            showDiscountBadge: {
              title: 'Show Discount Badge?',
              type: 'boolean',
              default: false,
            },
            size: {
              title: 'Size',
              type: 'string',
              enumNames: ['Big', 'Small'],
              enum: ['big', 'small'],
            },
          },
        },
        refNumber: {
          title: 'Show Reference Number?',
          type: 'boolean',
          default: false,
        },
      },
    },
    buyButton: {
      title: 'Buy Button',
      type: 'object',
      properties: {
        title: {
          ...title,
          default: 'Add to Cart',
        },
        icon: {
          title: 'Icon',
          type: 'object',
          properties: {
            icon: {
              title: 'Icon',
              type: 'string',
              enumNames: ['Shopping Cart'],
              enum: ['ShoppingCart'],
            },
            alt: {
              type: 'string',
              title: 'Alternative Label',
              default: 'Shopping Cart',
            },
          },
        },
      },
    },
    notAvailableButton: {
      title: 'Not Available Button',
      description: 'Shown when a SKU is not available',
      type: 'object',
      properties: {
        title: {
          ...title, // Reuse the title schema
          default: 'Not Available',
        },
      },
    },
    shippingSimulator: {
      title: 'Shipping Simulation',
      type: 'object',
      properties: {
        title: {
          ...title, // Reuse the title schema
          default: 'Shipping',
        },
        inputLabel: {
          title: 'Input Label',
          type: 'string',
          default: 'Postal Code',
        },
        link: {
          title: 'Postal Code Discovery',
          type: 'object',
          properties: {
            text: {
              title: 'Link Text',
              type: 'string',
              default: "I don't know my Postal Code",
            },
            to: {
              title: 'URL',
              type: 'string',
            },
          },
        },
        shippingOptionsTableTitle: {
          title: 'Shipping Options Table Header',
          type: 'string',
        },
      },
    },
    productDescription: {
      title: 'Product Description',
      type: 'object',
      properties: {
        initiallyExpanded: {
          type: 'string',
          title: 'Initially Expanded?',
          enumNames: ['First', 'All', 'None'],
          enum: ['first', 'all', 'none'],
        },
        displayDescription: {
          title: 'Should display description?',
          type: 'boolean',
          default: true,
        },
        title: {
          ...title, // Reuse the title schema
          title: 'Description section title',
          default: 'Description',
        },
      },
    },
  },
};

const CallToAction = {
  title: 'Call To Action',
  description: 'Get your 20% off on the first purchase!',
  type: 'object',
  required: ['title', 'link'],
  properties: {
    title, // Reuse the title schema
    link: {
      title: 'Link Path',
      type: 'object',
      required: ['text', 'url'],
      properties: {
        text: {
          title: 'Text',
          type: 'string',
        },
        url: {
          title: 'URL',
          type: 'string',
        },
      },
    },
  },
};

const SearchBanner = {
  title: 'Search Banner',
  description: 'Banners in PLP page',
  type: 'object',
  required: ['desktop', 'mobile', 'alt'],
  properties: {
    title: {
      ...title,
      title: 'Image Title',
    },
    description: {
      title: 'Image description',
      type: 'string',
    },
    alt: {
      title: 'Image alt',
      type: 'string',
    },
    desktop: {
      title: 'Desktop Banner',
      ...bannerImage,
    },
    mobile: {
      title: 'Mobile Banner',
      ...bannerImage,
    },
  },
};

const sections = {
  ProductDetailsWithCustomButton,
  CallToAction,
  SearchBanner,
};

// export default sections;
module.exports = sections;
