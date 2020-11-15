//https://dailycoding.io/article/Y3BBwEabeeLyrr9MQ2fS

var Validator = (function() {
  'use settings';

  var _createMessage = function (message, settings) {
    for (var key in settings) {
      message = message.replace('%' + key + '%', settings[key])
    }
    return message;
  }

  var _extend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++ ) {
      var obj = arguments[i];

      if (!obj)
        continue;

      for (var key in obj) {
        if(obj.hasOwnProperty(key)) {
          if(typeof obj[key] === 'object')
            out[key] = _extend(out[key], obj[key]);
          else 
            out[key] = obj[key];          
        }
      }
    }

    return out;
  }

  var regExps = {
    email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    url: /^((https?):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    numbers: /^\d+(\.\d{1,2})?$/,
    digits: /[0-9]*$/,
    letters: /[a-z][A-Z]*$/
  };

  var messages = {
    required: 'This field is required',
    min: 'This field should contain at least %rule% characters',
    max: 'This field should not contain more than %rule% characters',
    match: 'This field shold countain a valid %rule%'
  };

  var Validate = function(element, options) {
    var defaults = {
      regExps,
      messages
    }

    this.options = _extend({}, defaults, options);
    this.element = element;
    this.regExps = regExps;
  }

  var fn = Validate.prototype;

  fn.validate = function() {
    var isValid = true;

    if(!('value' in this.element)) {
      throw Error('Passed element should have value property');
    }
    this.value = this.element.value.trim();
    this.length = this.value.length;

    for (var rule in this.options.rules) {
      var param = this.options.rules[rule];

      if(!param)
        throw Error(`No validation rule '${param}'`);

      if(!this[rule](param)) {
        isValid = false;
        if(!this.options.messages[rule])
        this.message = _createMessage(this.options.messages[rule], {rule: param, data: this.value})
        this.options.onError.call(this);
        break;
      }
    }

    if (isValid) {
      this.options.onSuccess.call(this);
    }
  }

  fn.required = function() { return this.length > 0 };
  fn.min = function(param) { return this.length >= param; };
  fn.max = function(param) { return this.length <= param; };
  fn.match = function(param) { return this.rexExps[param].test(this.value); };

  return {
    init: Validate,
    fn
  }
  
})();

var onError = function() {
  var parentNode = this.element.parentNode;
  parentNode.querySelector('.help-block').textContent = 'Ошибка: ' + this.message;
};

var onSuccess = function() {
  var parentNode = this.element.parentNode;
  parentNode.querySelector('.help-block').textContent = 'Ура! Всё прошло хорошо, ваши данные полность валидные.';
};

var emailInput = new Validator.init(document.getElementById('email'), {
  rules: {
    min: 5,
    max: 20,
    match: 'email'
  },
  messages: {
    min: 'Это поле должно содержать минимум %rule% символов. Значение %data% не подходит',
    max: 'Это поле должно содержать максимум %rule% символов. Значение %data% не подходит',
    match: 'Это поле должно содержать адрес электронной почты. Значение %data% не подходит'
  },
  onError: onError,
  onSuccess: onSuccess
});

var passwordInput = new Validator.init(document.getElementById('password'), {
  rules: {
    required: true,
    password: true
  },
  messages: {
    required: 'Это поле обязательно для заполнения!',
    password: 'Пароль должет быть 12345qwerty Значение "%data%" не подходит'
  },
  onError: onError,
  onSuccess: onSuccess
});
Validator.fn.password = function() {
  return this.value.toLowerCase() === '12345qwerty';
};
var validateBtn = document.getElementById('validate');
validateBtn.addEventListener('click', function(e) {
  emailInput.validate();
  passwordInput.validate();
}, false)