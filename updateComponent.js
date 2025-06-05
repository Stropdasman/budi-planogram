(function(global){
  class JSONUpdater {
    constructor(root){
      this.root = root;
      this.titleEl = root.querySelector('[data-key="title"]');
      this.listEl = root.querySelector('[data-key="items"]');
      this.state = {};
    }

    setState(newState){
      const patches = global.jsonpatch ? global.jsonpatch.compare(this.state, newState) : [];
      patches.forEach(patch => {
        if (patch.path.startsWith('/title')) {
          this.titleEl.textContent = newState.title;
        }
        if (patch.path.startsWith('/items')) {
          this._updateItems(newState.items);
        }
      });
      // If no patches (initial render), render all
      if(!patches.length){
        if('title' in newState) this.titleEl.textContent = newState.title;
        if('items' in newState) this._updateItems(newState.items);
      }
      this.state = JSON.parse(JSON.stringify(newState));
    }

    _updateItems(items){
      for(let i=0; i<items.length; i++){
        let li = this.listEl.children[i];
        if(!li){
          li = this.listEl.appendChild(global.document.createElement('li'));
        }
        if(li.textContent !== items[i]){
          li.textContent = items[i];
        }
      }
      while(this.listEl.children.length > items.length){
        this.listEl.removeChild(this.listEl.lastChild);
      }
    }
  }
  global.JSONUpdater = JSONUpdater;
})(typeof window !== 'undefined' ? window : global);
