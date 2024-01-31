import * as loaderStore from './loader';
import * as refStore from './ref';
import * as trainStore from './train';
import * as mapConfigStore from './map_config.js';
import * as snsStore from './sns.js';
import * as riverStore from './river.js';
import * as denseStore from "@/stores/dense.js";
import * as evacuationStore from "@/stores/evacuation.js";

export const useLoader = loaderStore.useLoaderStore;
export const useRef = refStore.useRefStore;
export const useTrain = trainStore.useTrainStore;
export const useMapConfig = mapConfigStore.useMapConfigStore;
export const useSNS= snsStore.useSNSStore;
export const useRiver = riverStore.useRiverStore;
export const useDense = denseStore.useDenseStore;
export const useEvacuation = evacuationStore.useEvacuationStore;
