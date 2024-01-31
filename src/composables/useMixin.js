const HTTP_OK = 200;

export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};

export const toHash = (str) => {
  if (!str) {
    return;
  }

  return JSON.stringify(str);
}

export const fromHash = (str) => {
  if (!str) {
    return;
  }

  return JSON.parse((str));
}

// map error or success reponse from api
export const mapResponse = (res) => {
  const { data, meta } = res;

  if (meta?.code && meta?.code === 503) {
    // redirect if maintenance
    window.location.reload(true);
  }

  return {
    data,
    meta
  };
}

// generate random id
export const randomId = (seed = 1000000) => {
  return Math.ceil(Math.random()*seed)
}