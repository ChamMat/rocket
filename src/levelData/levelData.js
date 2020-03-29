export default {
  level1: {
    init: {
      // posX: 120,
      // posY: 50,
      posX: 442,
      posY: 400,
      gravite: 0.02,
      inertie: 1,
      puissance: 0.03,
      fuel: 500,
    },
    blocks: [
      {
        id: 1,
        bottom: '0',
        left: '425',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
  level2: {
    init: {
      posX: 120,
      posY: 50,
      gravite: 0.02,
      inertie: 1,
      puissance: 0.03,
      fuel: 650,
    },
    blocks: [
      {
        id: 1,
        bottom: '0',
        left: '100',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 2,
        bottom: '0',
        left: '750',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
  level3: {
    init: {
      posX: 120,
      posY: 50,
      gravite: 0.02,
      inertie: 1,
      puissance: 0.03,
      fuel: 750,
    },
    blocks: [
      {
        id: 1,
        bottom: '0',
        left: '100',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 2,
        bottom: '0',
        left: '400',
        height: '200',
        width: '50',
        required: false,
      },
      {
        id: 3,
        bottom: '0',
        left: '750',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
  level4: {
    init: {
      posX: 120,
      posY: 50,
      gravite: 0.02,
      inertie: 1,
      puissance: 0.03,
      fuel: 1000,
    },
    blocks: [
      {
        id: 1,
        bottom: '0',
        left: '100',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 2,
        bottom: '0',
        left: '400',
        height: '500',
        width: '50',
        required: false,
      },
      {
        id: 3,
        bottom: '550',
        left: '400',
        height: '50',
        width: '50',
        required: false,
      },
      {
        id: 4,
        bottom: '0',
        left: '750',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
  level5: {
    init: {
      posX: 20,
      posY: 250,
      gravite: 0.02,
      inertie: 1,
      puissance: 0.03,
      fuel: 2000,
    },
    blocks: [
      {
        id: 1,
        bottom: '200',
        left: '0',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 2,
        bottom: '200',
        left: '50',
        height: '100',
        width: '50',
        required: false,
      },
      {
        id: 3,
        bottom: '350',
        left: '00',
        height: '50',
        width: '100',
        required: false,
      },
      {
        id: 4,
        bottom: '350',
        left: '50',
        height: '50',
        width: '50',
        required: false,
      },
      {
        id: 5,
        bottom: '50',
        left: '150',
        height: '550',
        width: '50',
        required: false,
      },
      {
        id: 6,
        bottom: '0',
        left: '850',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 7,
        bottom: '0',
        left: '0',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 8,
        bottom: '0',
        left: '250',
        height: '450',
        width: '50',
        required: false,
      },
      {
        id: 9,
        bottom: '450',
        left: '250',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
  level6: {
    init: {
      posX: 120,
      posY: 50,
      gravite: 0.04,
      inertie: 0.97,
      puissance: 0.07,
      fuel: 1000,
    },
    blocks: [
      {
        id: 1,
        bottom: '0',
        left: '100',
        height: '50',
        width: '50',
        required: true,
      },
      {
        id: 2,
        bottom: '0',
        left: '750',
        height: '50',
        width: '50',
        required: true,
      },
    ],
  },
};
