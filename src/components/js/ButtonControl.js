class ButtonControl {
  constructor(options) {
    const { label = '', type = 'text', buttonStyle = 'default', canToggle = false, eventHandler = () => {} } = options;

    this._options = {
      label,
      type,
      buttonStyle,
      eventHandler,
      canToggle
    };
  }

  onAdd(map) {
    this._map = map;

    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

    this._stylesElement = document.createElement('button');
    this._stylesElement.classList = 'mapboxgl-ctrl-' + this._options.buttonStyle;

    if (this._options.type === 'text') {
      const textElement = document.createElement('div');
      textElement.className = "mapboxgl-ctrl-text";
      textElement.textContent = this._options.label;
      this._stylesElement.appendChild(textElement);
    }

    this.registerEventOnClick(this._options.eventHandler);
    this._container.appendChild(this._stylesElement);

    return this._container;
  }

  getDefaultPosition() {
    return 'bottom-right';
  }

  toggleButton() {
    if (!this._options.canToggle) {
      return;
    }
    this._stylesElement.classList.toggle('mapboxgl-ctrl-active');
  }

  registerEventOnClick(eventHandler = () => { }) {
    this._stylesElement.onclick = () => {
      this.toggleButton();
      eventHandler();
    }
  }

  trigger() {
    this._stylesElement.click();
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

export default ButtonControl;
