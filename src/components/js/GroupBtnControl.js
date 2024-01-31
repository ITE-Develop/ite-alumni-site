class GroupBtnControl {
    constructor(options = null) {
        this._options = options;
        this._buttonElements = [];
        this._buttonIndex = {};
        this._buttons = [];
    }

    isVersion2() {
        return this._options?.version === "2";
    }

    onAdd(map) {
        if (this.isVersion2()) {
            return this.onAddV2();
        }

        this._map = map;

        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl ' + (this._options?.class || '');

        const layoutElement = document.createElement('div');
        layoutElement.classList = 'ctrl-group';

        this._options.buttons.forEach((button, index) => {
            this._buttonIndex[button.id] = index;

            this._buttonElements.push(this._createButton(button));
            layoutElement.appendChild(this._buttonElements[index]);

            this.registerButtonOnClick(button.id);
        });

        this._container.appendChild(layoutElement);

        return this._container;
    }

    onAddV2(map) {
        this._map = map;

        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl ' + (this._options?.class || '');

        const layoutElement = document.createElement('div');
        layoutElement.classList = 'ctrl-group-v2';

        this._options.buttons.forEach((button, index) => {
            this._buttonIndex[button.id] = index;

            this._buttonElements.push(this._createButton(button));
            layoutElement.appendChild(this._buttonElements[index]);

            this.registerButtonOnClick(button.id);
        });

        this._container.appendChild(layoutElement);

        return this._container;
    }

    registerButtonOnClick(id, eventHandler = () => { }) {
        const index = this.getButtonIndex(id);
        if (index === '') {
            return;
        }

        this._buttonElements[index].onclick = () => {
            eventHandler();

            const currentButtonElement = this._buttonElements[index];
            if (this._options.canActive) {
                if (currentButtonElement.classList.contains('ctrl-btn-active')) {
                    currentButtonElement.classList.remove('ctrl-btn-active')
                } else {
                    currentButtonElement.classList.add('ctrl-btn-active')
                }
            } else {
                this._buttonElements.forEach((button) => {
                    if (button.classList.contains('ctrl-btn-group--active')) {
                        button.classList.remove('ctrl-btn-group--active');
                    }
                });

                if (!currentButtonElement.classList.contains('ctrl-btn-group--active')) {
                    currentButtonElement.classList.add('ctrl-btn-group--active')
                }
            }
        };
    }

    triggerButton(id) {
        const index = this.getButtonIndex(id);
        if (index === '') {
            return;
        }

        this._buttonElements[index].click();
    }

    updateIcon(id, icon) {
        const index = this.getButtonIndex(id);
        if (index === '') {
            return;
        }

        const imgElement = this._buttonElements[index].children[0];
        if (imgElement.tagName !== 'IMG' || !icon) {
            return;
        }

        imgElement.src = require(`@assets/images/icons/${icon}`);
    }

    setText(id, text = '') {
        const index = this.getButtonIndex(id);
        if (typeof (index) === 'undefined') {
            return;
        }

        this._buttonElements[index].children[1].textContent = text;
    }

    getButtonIndex(id) {
        return this._buttonIndex[id] ?? '';
    }

    clearAllActive() {
        this._buttonElements.forEach((btn) => {
            if (!btn.classList.contains('ctrl-btn-active')) {
                return;
            }
            btn.classList.remove('ctrl-btn-active');
        })
    }

    _createButton(button) {
        if (this.isVersion2()) {
            return this._createV2Button(button);
        }

        const stylesElement = document.createElement('button');
        stylesElement.classList = 'ctrl-btn ctrl-btn-group--' + button.radiusStyle;

        if (button.isActive) {
            stylesElement.classList += " ctrl-btn-group--active";
        }

        if (button.iconClass) {
            const iconElement = document.createElement('i');
            iconElement.className = 'ctrl-icon ' + button.iconClass || '';
            stylesElement.appendChild(iconElement);
        }

        if (button.src) {
            const imgElement = document.createElement('img');
            imgElement.className = 'ctrl-img';
            imgElement.src = button.src;
            stylesElement.appendChild(imgElement);
        }

        if (button.text) {
            const textElement = document.createElement('div');
            textElement.className = "ctrl-text";
            textElement.textContent = button.text;
            stylesElement.appendChild(textElement);
        }

        return stylesElement;
    }

    _createV2Button(button) {
        const stylesElement = document.createElement('button');
        stylesElement.classList = 'ctrl-btn';

        if (button.isActive) {
            stylesElement.classList += " ctrl-btn-group--active";
        }

        if (button.iconClass) {
            const iconElement = document.createElement('i');
            iconElement.className = 'ctrl-icon ' + button.iconClass || '';
            stylesElement.appendChild(iconElement);
        }

        if (button.src) {
            const imgElement = document.createElement('img');
            imgElement.className = 'ctrl-img';
            imgElement.src = button.src;
            stylesElement.appendChild(imgElement);
        }

        if (button.text) {
            const textElement = document.createElement('div');
            textElement.className = "ctrl-text";
            textElement.textContent = button.text;
            stylesElement.appendChild(textElement);
        }

        return stylesElement;
    }

    getDefaultPosition() {
        return 'top-right';
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

export default GroupBtnControl;
