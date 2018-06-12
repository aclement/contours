var defaultLineWidth = .75;
var defaultShadowSize = 2;

var styles = {
  wireframe: {
    type: 'contour',
    name: 'Wireframe',
    style: {
      land: {
        stroke: {
          strokeStyle: '#666',
          lineWidth: defaultLineWidth,
        },        
        fill: {
          type: 'solid',
          fillStyle: '#fff'
        }
      }
    },
    options: {
      indexInterval: 5
    }
  },

  natural: {
    type: 'contour',
    name: 'Natural',
    style: {
      land: {
        stroke: {
          strokeStyle: '#8C7556',
          lineWidth: defaultLineWidth,
        },
        fill: {
          type: 'gradient',
          colors: ['#486341', '#E5D9C9']
        }
      },
      water: {
        stroke: {
          strokeStyle: '#8C7556',
          lineWidth: defaultLineWidth,
        },        
        fill: {
          type: 'gradient',
          colors: ['#315D9B', '#D5F2FF']
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  solidLight: {
    type: 'contour',
    name: 'Solid Light',
    style: {
      land: {
        stroke: {
          strokeStyle: '#8C7556',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#FFFAE7'
        }
      },
      water: {
        stroke: {
          strokeStyle: '#8C7556',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#D7EFFF'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  solidDark: {
    type: 'contour',
    name: 'Solid Dark',
    style: {
      land: {
        stroke: {
          strokeStyle: '#fff',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#988D73'
        }
      },
      water: {
        stroke: {
          strokeStyle: '#fff',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#4B82B9'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  solidGray: {
    type: 'contour',
    name: 'Solid Gray',
    style: {
      land: {
        stroke: {
          strokeStyle: '#999',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#666'
        }
      },
      water: {
        stroke: {
          strokeStyle: '#999',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#fff'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  tintedGray: {
    type: 'contour',
    name: 'Tinted Gray',
    style: {
      land: {
        stroke: {
          strokeStyle: '#666',
          lineWidth: defaultLineWidth,
        },
        fill: {
          type: 'gradient',
          colors: ['#000', '#fff']
        }
      }
    }
  },

  xRay: {
    type: 'contour',
    name: 'X-Ray',
    style: {
      land: {
        stroke: {
          strokeStyle: '#597171',
          lineWidth: defaultLineWidth,
        },
        fill: {
          type: 'gradient',
          colors: ['#242828', '#DFFFFA']
        }
      }
    }
  },

  nightVision: {
    type: 'contour',
    name: 'Night Vision',
    style: {
      land: {
        stroke: {
          strokeStyle: '#24DD08',
          lineWidth: defaultLineWidth,
        },
        fill: {
          type: 'gradient',
          colors: ['#000000', '#34932D']
        }
      }
    }
  },

  blueprint: {
    type: 'contour',
    name: 'Blueprint',
    style: {
      land: {
        stroke: {
          strokeStyle: '#fff',
          lineWidth: defaultLineWidth,
        },        
        fill: {
          type: 'solid',
          fillStyle: '#2d54af'
        }
      }
    },
    options: {
      indexInterval: 5
    }
  },

  chalkboard: {
    type: 'contour',
    name: 'Chalkboard',
    style: {
      land: {
        stroke: {
          strokeStyle: '#fff9ac',
          lineWidth: defaultLineWidth,
        },        
        fill: {
          type: 'solid',
          fillStyle: '#1a1a1a'
        }
      }
    },
    options: {
      indexInterval: 5
    }
  },

  redlineMarkup: {
    type: 'contour',
    name: 'Redline Markup',
    style: {
      land: {
        stroke: {
          strokeStyle: '#999',
          lineWidth: defaultLineWidth,
        },  
        fill: {
          type: 'none'
        }
      },
      indexLine: {
        stroke: {
          strokeStyle: '#d32a2a'
        }
      }
    },
    options: {
      indexInterval: 5
    }
  },

  grayGhost: {
    type: 'contour',
    name: 'Gray Ghost',
    style: {
      land: {
        stroke: {
          strokeStyle: '#999',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'gradient',
          colors: ['#999', '#000']
        }
      },
      water: {
        stroke: {
          strokeStyle: '#999',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#999'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  whiteGhost: {
    type: 'contour',
    name: 'White Ghost',
    style: {
      land: {
        stroke: {
          strokeStyle: '#fff',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'gradient',
          colors: ['#fff', '#000']
        }
      },
      water: {
        stroke: {
          strokeStyle: '#fff',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#fff'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  reverseGhost: {
    type: 'contour',
    name: 'Reverse Ghost',
    style: {
      land: {
        stroke: {
          strokeStyle: '#000',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'gradient',
          colors: ['#000', '#fff']
        }
      },
      water: {
        stroke: {
          strokeStyle: '#000',
          lineWidth: defaultLineWidth
        },
        fill: {
          type: 'solid',
          fillStyle: '#000'
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  spectral: {
    type: 'contour',
    name: 'Spectral',
    style: {
      land: {
        stroke: {
          strokeStyle: '#ccc',
          lineWidth: defaultLineWidth,
        },
        fill: {
          type: 'gradient',
          colors: ['#FDFFD0', '#FF2828']
        }
      },
      water: {
        stroke: {
          strokeStyle: '#ccc',
          lineWidth: defaultLineWidth,
        },        
        fill: {
          type: 'gradient',
          colors: ['#0F63C3', '#FDFFD0']
        }
      }
    },
    options: {
      zeroContour: 0
    }
  },

  arctic: {
    type: 'illuminated',
    name: 'Arctic',
    style: {
      land: {
        stroke: {
          strokeStyle: '#B1AEA4',
          lineWidth: defaultShadowSize + 1,
          shadowColor: '#5B5143',
          shadowBlur: defaultShadowSize,
          shadowOffsetX: defaultShadowSize,
          shadowOffsetY: defaultShadowSize
        },
        fill: {
          type: 'solid',
          fillStyle: '#fff'
        }
      },
      water: {
        stroke: {
          strokeStyle: 'rgba(224, 242, 255, .5)',
          lineWidth: defaultShadowSize + 1,
          shadowColor: '#4e5c66',
          shadowBlur: defaultShadowSize,
          shadowOffsetX: defaultShadowSize,
          shadowOffsetY: defaultShadowSize
        },
        fill: {
          type: 'solid',
          fillStyle: '#fff'
        }
      }
    }
  },

  sunrise: {
    type: 'illuminated',
    name: 'Sunrise',
    style: {
      land: {
        stroke: {
          strokeStyle: '#E7A146',
          lineWidth: defaultShadowSize + 1,
          shadowColor: '#2C294E',
          shadowBlur: defaultShadowSize,
          shadowOffsetX: defaultShadowSize,
          shadowOffsetY: defaultShadowSize
        },
        fill: {
          type: 'gradient',
          colors: ['#333', '#fff']
        }
      }
    }
  },

  beach: {
    type: 'illuminated',
    name: 'Beach',
    style: {
      land: {
        stroke: {
          strokeStyle: '#BAA480',
          lineWidth: defaultShadowSize + 1,
          shadowColor: '#776952',
          shadowBlur: defaultShadowSize,
          shadowOffsetX: defaultShadowSize,
          shadowOffsetY: defaultShadowSize
        },
        fill: {
          type: 'solid',
          fillStyle: '#FFF4B5'
        }
      },
      water: {
        stroke: {
          strokeStyle: 'rgba(224, 242, 255, .5)',
          lineWidth: defaultShadowSize + 1,
          shadowColor: '#4e5c66',
          shadowBlur: defaultShadowSize,
          shadowOffsetX: defaultShadowSize,
          shadowOffsetY: defaultShadowSize
        },
        fill: {
          type: 'solid',
          fillStyle: '#4C8C9B'
        }
      }
    }
  }
}