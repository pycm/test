function Observed (){

	/*
     * Подписка на событие
     * event - название события
     * fn - функция или масив функций обработчиков события
     */
	this.on = function(event, fn) {
		//если еще нет масива с евентами - создаем
		if (!this._events) this._events = [];

		//если в нем нет такого обработчика назначаем
	 	if (!this._events[event]) {
	  		this._events[event] = [];
		}

		//добавляем обработчик
        //Если массив добавляем каждый обработчик отдельно
        if (typeof(fn)=='object' && (fn instanceof Array)) {
            for (var i = fn.length - 1; i >= 0; i--) {
                this._events[event].push(fn[i]);
            };   
        }
        else {
            this._events[event].push(fn);
        }
		
	},

	/*
     * Прекращение подписки, те же аргументы
     */
	this.off = function(event, fn) {
    	var fns = this._events[event];
    	if (!fns) return;
    	
    	for(var i=0; i<fns.length; i++) {
      		if (fns[i] == fn) {
       			fns.splice(i--, 1);
      		}
    	}
  	},

  	/*
     * Вызываем событие 
     */
  	this.trigger = function(event) {

  		// обработчиков для события нет
    	if (!this._events[event]) {
      		return;
    	}

    	// вызвать обработчики 
    	var fns = this._events[event];
    	for (var i = 0; i < fns.length; i++) {
      		fns[i].apply(this);
    	}

	}
}