import { useRoute, useRouter } from "vue-router";

export default function useQuery() {
  const router = useRouter();
  const route = useRoute();

  const pushQuery = async (paramObj = {}) => {
    await router.push({
      query: paramObj,
    });
  };

  const hasQuery = (param) => {
    return !!route.query[param];
  };

  const getQuery = (param) => {
    return route.query[param];
  };

  const createQueryIfNotExist = (
    key,
    value,
    excludeQuery = [],
    isArray = false,
    excludeValue = []
  ) => {
    if (!value) {
      removeQuery(key);
      return;
    }

    if (!route.query[key] || !isArray) {
      let query = route.query;

      if (excludeQuery.length > 0) {
        for (let i = 0; i < excludeQuery.length; i++) {
          const key = excludeQuery[i];

          if (!key || !Object.prototype.hasOwnProperty.call(route.query, key)) {
            continue;
          }

          delete query[key];
        }
      }

      router.push({
        query: {
          ...query,
          [key]: value,
        },
      });
      return;
    }

    let queryList = route.query[key].split(",");

    if (queryList.includes(value)) {
      return;
    }

    queryList.push(value);

    let result = Object.assign(
      {},
      {
        ...route.query,
        [key]: queryList.join(","),
      }
    );

    if (excludeValue.length > 0) {
      excludeValue.filter((item) => {
        if (result[key].split(",").includes(item)) {
          result = {
            ...result,
            [key]: result[key]
              .split(",")
              .filter((value) => value !== item)
              .join(","),
          };
        }
      });
    }

    router.push({
      query: result,
    });
  };

  const checkIfQueryExisted = (key, value) => {
    if (!route.query[key]) {
      return false;
    }

    const queryParams = route.query[key];

    if (!Array.isArray(queryParams)) {
      return queryParams.split(",").includes(value);
    }

    router.replace({
      query: {
        ...route.query,
        [key]: queryParams.join(","),
      },
    });

    return queryParams.includes(value);
  };

  const removeQuery = (key) => {
    if (!key || !Object.prototype.hasOwnProperty.call(route.query, key)) {
      return;
    }

    let result = Object.assign({}, route.query);
    delete result[key];

    router.push({
      query: result,
    });
  };

  const replaceQueryIfNotExist = async (key, value, isArray = false) => {
    if (!value) {
      removeQuery(key);
      return;
    }

    if (!route.query[key] || !isArray) {
      let query = route.query;

      if (query[key] === value) { 
        return;
      }

      await router.replace({
        query: {
          ...query,
          [key]: value
        }
      });
      return;
    }

    let queryList = route.query[key].split(',');
    if (queryList.includes(value)) {
      return;
    }

    queryList.push(value);
    let result = Object.assign({}, {
      ...route.query,
      [key]: (queryList).join(',')
    });

    await router.replace({
      query: result
    });

  }

  const removeQueryIfExist = async (key, value, isArray = false) => {
    if (!isArray) {
      let result = Object.assign({}, route.query);
      delete result[key];

      await router.replace({
        query: result
      })

      return;
    }

    let result = Object.assign({}, route.query);
    if (!result[key]) {
      return;
    }
    result = result[key].split(',').filter((match) => match !== value);
    await router.replace({
      query: {
        ...route.query,
        [key]: result.join(',')
      }
    })
  }

  return {
    route,
    router,
    pushQuery,
    hasQuery,
    getQuery,
    removeQuery,
    createQueryIfNotExist,
    checkIfQueryExisted,
    replaceQueryIfNotExist,
    removeQueryIfExist
  };
}
