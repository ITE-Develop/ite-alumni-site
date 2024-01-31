
import ENV from "@/config/env";

export const makeVariantProps = () => ({
  color: String,
  variant: {
    type: String,
    default: 'elevated',
    validator: v => ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].includes(v)
  },
});

export const makeTagProps = () => ({
  tag: {
    type: String,
    default: 'div'
  }
});

export const makeRouterProps = () => ({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
});

export const makeRoundedProps = () => ({
  rounded: {
    type: [Boolean, Number, String],
    default: undefined
  }
});

export const makePositionProps = () => ({
  position: {
    type: String,
    validator: /* istanbul ignore next */v => ['static', 'relative', 'fixed', 'absolute', 'sticky'].includes(v)
  }
});

export const makeLocationProps = () => ({
  location: String
});

export const makeLoaderProps = () => ({
  loading: Boolean
});

export const makeElevationProps = () => ({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 &&
        value <= 24;
    }
  }
});

export const makeDimensionProps = () => ({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
});

export const makeDensityProps = () => ({
  density: {
    type: String,
    default: 'default',
    validator: v => [null, 'default', 'comfortable', 'compact'].includes(v)
  }
});

export const makeBorderProps = () => ({
  border: [Boolean, Number, String]
});

export const makeThemeProps = () => ({
  theme: String
});

export const makeTransitionProps = () => ({
  transition: {
    type: [Boolean, String, Object],
    default: 'fade-transition',
    validator: val => val !== true
  }
});

export const makeLabelProps = () => ({
  name: { type: String, required: true },
  text: { type: String, default: '' },
})

export const makeInputProps = () => ({
  id: { type: String },
  name: { type: String, required: true },
  preIcon: { type: String },
  modelValue: { type: [String, Number] },
  placeholder: { type: String },
  label: { type: String, default: '' },
  rules: { type: Object, default: '' },
  type: { type: String, default: 'text' },
  initialValue: { type: String },
  checkedValue: { type: [String, Boolean, Object] },
  uncheckedValue: { type: [String, Boolean, Object] },
  validateOnMount: { type: [String, Boolean, Object, Function] },
  validateOnValueUpdate: { type: [String, Boolean, Object, Function] },
  keepValueOnUnmount: { type: [String, Boolean, Object, Function] },
  bails: { type: [String, Boolean, Object, Function] },
  inputClass: { type: [String, Object] },
})

export const makeMapboxProps = () => ({
  name: {
    type: String,
    default: "map",
  },
  center: {
    type: Array,
    default() {
      return [
        ENV.MAPBOX_LONG || 139.7613669,
        ENV.MAPBOX_LAT || 35.6547533,
      ];
    },
  },
  height: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  zoom: {
    type: Number,
    default: 14.4,
  },
  mapStyle: {
    type: [String, Object],
    default: "mapbox://styles/mapbox/streets-v11",
  },
  isDark: {
    type: Boolean,
    default: false
  },
  canPin: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "map"
  },
  source: {
    type: String,
  }
});

export const makeModalProps = () => ({
  id: { type: String, default: ENV.APP_PREFIX + "-modal" },
  hasHeader: { type: Boolean, default: true },
  hasFooter: { type: Boolean, default: true },
});

export const makeOffcanvasProps = () => ({
  id: { type: String, default: ENV.APP_PREFIX + "-offcanvas" },
});

export const makeCookieOffcanvasProps = () => ({
  id: { type: String, default: ENV.APP_PREFIX + "-cookie-offcanvas" },
});

export const makeLegendProps = () => ({
  id: { type: String, default: ENV.APP_PREFIX + "-legend" },
});