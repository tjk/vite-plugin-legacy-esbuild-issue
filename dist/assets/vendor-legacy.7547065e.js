;(function(){function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e2){throw _e2;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e3){didErr=true;err=_e3;},f:function f(){try{if(!normalCompletion&&it.return!=null)it.return();}finally{if(didErr)throw err;}}};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}System.register([],function(exports){'use strict';return{execute:function execute(){exports({a:createBaseVNode,c:createElementBlock,d:defineComponent,e:popScopeId,f:createTextVNode,h:renderSlot,i:debounce,j:withAsyncContext,k:createBlock,l:reactive,n:normalizeClass,o:openBlock,p:pushScopeId,r:ref,s:defineCustomElement,u:unref,w:withCtx});/**
             * Make a map and return a function for checking if a key
             * is in that map.
             * IMPORTANT: all calls of this function must be prefixed with
             * \/\*#\_\_PURE\_\_\*\/
             * So that rollup can tree-shake them if necessary.
             */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return!!map[val.toLowerCase()];}:function(val){return!!map[val];};}/**
             * On the client we only need to offer special cases for boolean attributes that
             * have different names from their corresponding dom properties:
             * - itemscope -> N/A
             * - allowfullscreen -> allowFullscreen
             * - formnovalidate -> formNoValidate
             * - ismap -> isMap
             * - nomodule -> noModule
             * - novalidate -> noValidate
             * - readonly -> readOnly
             */var specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";var isSpecialBooleanAttr=/*#__PURE__*/makeMap(specialBooleanAttrs);/**
             * Boolean attributes should be included if the value is truthy or ''.
             * e.g. <select multiple> compiles to { multiple: '' }
             */function includeBooleanAttr(value){return!!value||value==='';}function normalizeStyle(value){if(isArray(value)){var res={};for(var i=0;i<value.length;i++){var item=value[i];var normalized=isString(item)?parseStringStyle(item):normalizeStyle(item);if(normalized){for(var key in normalized){res[key]=normalized[key];}}}return res;}else if(isString(value)){return value;}else if(isObject$2(value)){return value;}}var listDelimiterRE=/;(?![^(]*\))/g;var propertyDelimiterRE=/:(.+)/;function parseStringStyle(cssText){var ret={};cssText.split(listDelimiterRE).forEach(function(item){if(item){var tmp=item.split(propertyDelimiterRE);tmp.length>1&&(ret[tmp[0].trim()]=tmp[1].trim());}});return ret;}function normalizeClass(value){var res='';if(isString(value)){res=value;}else if(isArray(value)){for(var i=0;i<value.length;i++){var normalized=normalizeClass(value[i]);if(normalized){res+=normalized+' ';}}}else if(isObject$2(value)){for(var name in value){if(value[name]){res+=name+' ';}}}return res.trim();}/**
             * For converting {{ interpolation }} values to displayed strings.
             * @private
             */var toDisplayString=exports('t',function(val){return val==null?'':isArray(val)||isObject$2(val)&&(val.toString===objectToString$1||!isFunction$1(val.toString))?JSON.stringify(val,replacer,2):String(val);});var replacer=function replacer(_key,val){// can't use isRef here since @vue/shared has no deps
if(val&&val.__v_isRef){return replacer(_key,val.value);}else if(isMap(val)){return _defineProperty({},"Map(".concat(val.size,")"),_toConsumableArray(val.entries()).reduce(function(entries,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];entries["".concat(key," =>")]=val;return entries;},{}));}else if(isSet(val)){return _defineProperty({},"Set(".concat(val.size,")"),_toConsumableArray(val.values()));}else if(isObject$2(val)&&!isArray(val)&&!isPlainObject(val)){return String(val);}return val;};var EMPTY_OBJ={};var EMPTY_ARR=[];var NOOP=function NOOP(){};/**
             * Always return false.
             */var NO=function NO(){return false;};var onRE=/^on[^a-z]/;var isOn=function isOn(key){return onRE.test(key);};var isModelListener=function isModelListener(key){return key.startsWith('onUpdate:');};var extend=Object.assign;var remove=function remove(arr,el){var i=arr.indexOf(el);if(i>-1){arr.splice(i,1);}};var hasOwnProperty$1=Object.prototype.hasOwnProperty;var hasOwn=function hasOwn(val,key){return hasOwnProperty$1.call(val,key);};var isArray=Array.isArray;var isMap=function isMap(val){return toTypeString(val)==='[object Map]';};var isSet=function isSet(val){return toTypeString(val)==='[object Set]';};var isFunction$1=function isFunction$1(val){return typeof val==='function';};var isString=function isString(val){return typeof val==='string';};var isSymbol$1=function isSymbol$1(val){return _typeof(val)==='symbol';};var isObject$2=function isObject$2(val){return val!==null&&_typeof(val)==='object';};var isPromise$1=function isPromise$1(val){return isObject$2(val)&&isFunction$1(val.then)&&isFunction$1(val.catch);};var objectToString$1=Object.prototype.toString;var toTypeString=function toTypeString(value){return objectToString$1.call(value);};var toRawType=function toRawType(value){// extract "RawType" from strings like "[object RawType]"
return toTypeString(value).slice(8,-1);};var isPlainObject=function isPlainObject(val){return toTypeString(val)==='[object Object]';};var isIntegerKey=function isIntegerKey(key){return isString(key)&&key!=='NaN'&&key[0]!=='-'&&''+parseInt(key,10)===key;};var isReservedProp=/*#__PURE__*/makeMap(// the leading comma is intentional so empty string "" is also included
',key,ref,'+'onVnodeBeforeMount,onVnodeMounted,'+'onVnodeBeforeUpdate,onVnodeUpdated,'+'onVnodeBeforeUnmount,onVnodeUnmounted');var cacheStringFunction=function cacheStringFunction(fn){var cache=Object.create(null);return function(str){var hit=cache[str];return hit||(cache[str]=fn(str));};};var camelizeRE=/-(\w)/g;/**
             * @private
             */var camelize=cacheStringFunction(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});var hyphenateRE=/\B([A-Z])/g;/**
             * @private
             */var hyphenate=cacheStringFunction(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase();});/**
             * @private
             */var capitalize=cacheStringFunction(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
             * @private
             */var toHandlerKey=cacheStringFunction(function(str){return str?"on".concat(capitalize(str)):"";});// compare whether a value has changed, accounting for NaN.
var hasChanged=function hasChanged(value,oldValue){return!Object.is(value,oldValue);};var invokeArrayFns=function invokeArrayFns(fns,arg){for(var i=0;i<fns.length;i++){fns[i](arg);}};var def=function def(obj,key,value){Object.defineProperty(obj,key,{configurable:true,enumerable:false,value:value});};var toNumber$1=function toNumber$1(val){var n=parseFloat(val);return isNaN(n)?val:n;};var _globalThis;var getGlobalThis=function getGlobalThis(){return _globalThis||(_globalThis=typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:typeof window!=='undefined'?window:typeof global!=='undefined'?global:{});};var activeEffectScope;var effectScopeStack=[];var EffectScope=/*#__PURE__*/function(){function EffectScope(){var detached=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;_classCallCheck(this,EffectScope);this.active=true;this.effects=[];this.cleanups=[];if(!detached&&activeEffectScope){this.parent=activeEffectScope;this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1;}}_createClass(EffectScope,[{key:"run",value:function run(fn){if(this.active){try{this.on();return fn();}finally{this.off();}}}},{key:"on",value:function on(){if(this.active){effectScopeStack.push(this);activeEffectScope=this;}}},{key:"off",value:function off(){if(this.active){effectScopeStack.pop();activeEffectScope=effectScopeStack[effectScopeStack.length-1];}}},{key:"stop",value:function stop(fromParent){if(this.active){this.effects.forEach(function(e){return e.stop();});this.cleanups.forEach(function(cleanup){return cleanup();});if(this.scopes){this.scopes.forEach(function(e){return e.stop(true);});}// nested scope, dereference from parent to avoid memory leaks
if(this.parent&&!fromParent){// optimized O(1) removal
var last=this.parent.scopes.pop();if(last&&last!==this){this.parent.scopes[this.index]=last;last.index=this.index;}}this.active=false;}}}]);return EffectScope;}();function recordEffectScope(effect,scope){scope=scope||activeEffectScope;if(scope&&scope.active){scope.effects.push(effect);}}var createDep=function createDep(effects){var dep=new Set(effects);dep.w=0;dep.n=0;return dep;};var wasTracked=function wasTracked(dep){return(dep.w&trackOpBit)>0;};var newTracked=function newTracked(dep){return(dep.n&trackOpBit)>0;};var initDepMarkers=function initDepMarkers(_ref5){var deps=_ref5.deps;if(deps.length){for(var i=0;i<deps.length;i++){deps[i].w|=trackOpBit;// set was tracked
}}};var finalizeDepMarkers=function finalizeDepMarkers(effect){var deps=effect.deps;if(deps.length){var ptr=0;for(var i=0;i<deps.length;i++){var dep=deps[i];if(wasTracked(dep)&&!newTracked(dep)){dep.delete(effect);}else{deps[ptr++]=dep;}// clear bits
dep.w&=~trackOpBit;dep.n&=~trackOpBit;}deps.length=ptr;}};var targetMap=new WeakMap();// The number of effects currently being tracked recursively.
var effectTrackDepth=0;var trackOpBit=1;/**
             * The bitwise track markers support at most 30 levels op recursion.
             * This value is chosen to enable modern JS engines to use a SMI on all platforms.
             * When recursion depth is greater, fall back to using a full cleanup.
             */var maxMarkerBits=30;var effectStack=[];var activeEffect;var ITERATE_KEY=Symbol('');var MAP_KEY_ITERATE_KEY=Symbol('');var ReactiveEffect=/*#__PURE__*/function(){function ReactiveEffect(fn){var scheduler=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var scope=arguments.length>2?arguments[2]:undefined;_classCallCheck(this,ReactiveEffect);this.fn=fn;this.scheduler=scheduler;this.active=true;this.deps=[];recordEffectScope(this,scope);}_createClass(ReactiveEffect,[{key:"run",value:function run(){if(!this.active){return this.fn();}if(!effectStack.includes(this)){try{effectStack.push(activeEffect=this);enableTracking();trackOpBit=1<<++effectTrackDepth;if(effectTrackDepth<=maxMarkerBits){initDepMarkers(this);}else{cleanupEffect(this);}return this.fn();}finally{if(effectTrackDepth<=maxMarkerBits){finalizeDepMarkers(this);}trackOpBit=1<<--effectTrackDepth;resetTracking();effectStack.pop();var n=effectStack.length;activeEffect=n>0?effectStack[n-1]:undefined;}}}},{key:"stop",value:function stop(){if(this.active){cleanupEffect(this);if(this.onStop){this.onStop();}this.active=false;}}}]);return ReactiveEffect;}();function cleanupEffect(effect){var deps=effect.deps;if(deps.length){for(var i=0;i<deps.length;i++){deps[i].delete(effect);}deps.length=0;}}var shouldTrack=true;var trackStack=[];function pauseTracking(){trackStack.push(shouldTrack);shouldTrack=false;}function enableTracking(){trackStack.push(shouldTrack);shouldTrack=true;}function resetTracking(){var last=trackStack.pop();shouldTrack=last===undefined?true:last;}function track(target,type,key){if(!isTracking()){return;}var depsMap=targetMap.get(target);if(!depsMap){targetMap.set(target,depsMap=new Map());}var dep=depsMap.get(key);if(!dep){depsMap.set(key,dep=createDep());}trackEffects(dep);}function isTracking(){return shouldTrack&&activeEffect!==undefined;}function trackEffects(dep,debuggerEventExtraInfo){var shouldTrack=false;if(effectTrackDepth<=maxMarkerBits){if(!newTracked(dep)){dep.n|=trackOpBit;// set newly tracked
shouldTrack=!wasTracked(dep);}}else{// Full cleanup mode.
shouldTrack=!dep.has(activeEffect);}if(shouldTrack){dep.add(activeEffect);activeEffect.deps.push(dep);}}function trigger(target,type,key,newValue,oldValue,oldTarget){var depsMap=targetMap.get(target);if(!depsMap){// never been tracked
return;}var deps=[];if(type==="clear"/* CLEAR */){// collection being cleared
// trigger all effects for target
deps=_toConsumableArray(depsMap.values());}else if(key==='length'&&isArray(target)){depsMap.forEach(function(dep,key){if(key==='length'||key>=newValue){deps.push(dep);}});}else{// schedule runs for SET | ADD | DELETE
if(key!==void 0){deps.push(depsMap.get(key));}// also run for iteration key on ADD | DELETE | Map.SET
switch(type){case"add"/* ADD */:if(!isArray(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}else if(isIntegerKey(key)){// new index added to array -> length changes
deps.push(depsMap.get('length'));}break;case"delete"/* DELETE */:if(!isArray(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}break;case"set"/* SET */:if(isMap(target)){deps.push(depsMap.get(ITERATE_KEY));}break;}}if(deps.length===1){if(deps[0]){{triggerEffects(deps[0]);}}}else{var effects=[];var _iterator=_createForOfIteratorHelper(deps),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var dep=_step.value;if(dep){effects.push.apply(effects,_toConsumableArray(dep));}}}catch(err){_iterator.e(err);}finally{_iterator.f();}{triggerEffects(createDep(effects));}}}function triggerEffects(dep,debuggerEventExtraInfo){// spread into array for stabilization
var _iterator2=_createForOfIteratorHelper(isArray(dep)?dep:_toConsumableArray(dep)),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var effect=_step2.value;if(effect!==activeEffect||effect.allowRecurse){if(effect.scheduler){effect.scheduler();}else{effect.run();}}}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}var isNonTrackableKeys=/*#__PURE__*/makeMap("__proto__,__v_isRef,__isVue");var builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).map(function(key){return Symbol[key];}).filter(isSymbol$1));var get=/*#__PURE__*/createGetter();var shallowGet=/*#__PURE__*/createGetter(false,true);var readonlyGet=/*#__PURE__*/createGetter(true);var arrayInstrumentations=/*#__PURE__*/createArrayInstrumentations();function createArrayInstrumentations(){var instrumentations={};['includes','indexOf','lastIndexOf'].forEach(function(key){instrumentations[key]=function(){var arr=toRaw(this);for(var i=0,l=this.length;i<l;i++){track(arr,"get"/* GET */,i+'');}// we run the method using the original args first (which may be reactive)
for(var _len=arguments.length,args=new Array(_len),_key2=0;_key2<_len;_key2++){args[_key2]=arguments[_key2];}var res=arr[key].apply(arr,args);if(res===-1||res===false){// if that didn't work, run it again using raw values.
return arr[key].apply(arr,_toConsumableArray(args.map(toRaw)));}else{return res;}};});['push','pop','shift','unshift','splice'].forEach(function(key){instrumentations[key]=function(){pauseTracking();for(var _len2=arguments.length,args=new Array(_len2),_key3=0;_key3<_len2;_key3++){args[_key3]=arguments[_key3];}var res=toRaw(this)[key].apply(this,args);resetTracking();return res;};});return instrumentations;}function createGetter(){var isReadonly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var shallow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function get(target,key,receiver){if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_raw"/* RAW */&&receiver===(isReadonly?shallow?shallowReadonlyMap:readonlyMap:shallow?shallowReactiveMap:reactiveMap).get(target)){return target;}var targetIsArray=isArray(target);if(!isReadonly&&targetIsArray&&hasOwn(arrayInstrumentations,key)){return Reflect.get(arrayInstrumentations,key,receiver);}var res=Reflect.get(target,key,receiver);if(isSymbol$1(key)?builtInSymbols.has(key):isNonTrackableKeys(key)){return res;}if(!isReadonly){track(target,"get"/* GET */,key);}if(shallow){return res;}if(isRef(res)){// ref unwrapping - does not apply for Array + integer key.
var shouldUnwrap=!targetIsArray||!isIntegerKey(key);return shouldUnwrap?res.value:res;}if(isObject$2(res)){// Convert returned value into a proxy as well. we do the isObject check
// here to avoid invalid value warning. Also need to lazy access readonly
// and reactive here to avoid circular dependency.
return isReadonly?readonly(res):reactive(res);}return res;};}var set=/*#__PURE__*/createSetter();var shallowSet=/*#__PURE__*/createSetter(true);function createSetter(){var shallow=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return function set(target,key,value,receiver){var oldValue=target[key];if(!shallow){value=toRaw(value);oldValue=toRaw(oldValue);if(!isArray(target)&&isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}}var hadKey=isArray(target)&&isIntegerKey(key)?Number(key)<target.length:hasOwn(target,key);var result=Reflect.set(target,key,value,receiver);// don't trigger if target is something up in the prototype chain of original
if(target===toRaw(receiver)){if(!hadKey){trigger(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger(target,"set"/* SET */,key,value);}}return result;};}function deleteProperty(target,key){var hadKey=hasOwn(target,key);target[key];var result=Reflect.deleteProperty(target,key);if(result&&hadKey){trigger(target,"delete"/* DELETE */,key,undefined);}return result;}function has(target,key){var result=Reflect.has(target,key);if(!isSymbol$1(key)||!builtInSymbols.has(key)){track(target,"has"/* HAS */,key);}return result;}function ownKeys(target){track(target,"iterate"/* ITERATE */,isArray(target)?'length':ITERATE_KEY);return Reflect.ownKeys(target);}var mutableHandlers={get:get,set:set,deleteProperty:deleteProperty,has:has,ownKeys:ownKeys};var readonlyHandlers={get:readonlyGet,set:function set(target,key){return true;},deleteProperty:function deleteProperty(target,key){return true;}};var shallowReactiveHandlers=/*#__PURE__*/extend({},mutableHandlers,{get:shallowGet,set:shallowSet});var toShallow=function toShallow(value){return value;};var getProto=function getProto(v){return Reflect.getPrototypeOf(v);};function get$1(target,key){var isReadonly=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isShallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
target=target["__v_raw"/* RAW */];var rawTarget=toRaw(target);var rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"get"/* GET */,key);}!isReadonly&&track(rawTarget,"get"/* GET */,rawKey);var _getProto=getProto(rawTarget),has=_getProto.has;var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;if(has.call(rawTarget,key)){return wrap(target.get(key));}else if(has.call(rawTarget,rawKey)){return wrap(target.get(rawKey));}else if(target!==rawTarget){// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
target.get(key);}}function has$1(key){var isReadonly=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var target=this["__v_raw"/* RAW */];var rawTarget=toRaw(target);var rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"has"/* HAS */,key);}!isReadonly&&track(rawTarget,"has"/* HAS */,rawKey);return key===rawKey?target.has(key):target.has(key)||target.has(rawKey);}function size(target){var isReadonly=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;target=target["__v_raw"/* RAW */];!isReadonly&&track(toRaw(target),"iterate"/* ITERATE */,ITERATE_KEY);return Reflect.get(target,'size',target);}function add(value){value=toRaw(value);var target=toRaw(this);var proto=getProto(target);var hadKey=proto.has.call(target,value);if(!hadKey){target.add(value);trigger(target,"add"/* ADD */,value,value);}return this;}function set$1(key,value){value=toRaw(value);var target=toRaw(this);var _getProto2=getProto(target),has=_getProto2.has,get=_getProto2.get;var hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}var oldValue=get.call(target,key);target.set(key,value);if(!hadKey){trigger(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger(target,"set"/* SET */,key,value);}return this;}function deleteEntry(key){var target=toRaw(this);var _getProto3=getProto(target),has=_getProto3.has,get=_getProto3.get;var hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}get?get.call(target,key):undefined;// forward the operation before queueing reactions
var result=target.delete(key);if(hadKey){trigger(target,"delete"/* DELETE */,key,undefined);}return result;}function clear(){var target=toRaw(this);var hadItems=target.size!==0;// forward the operation before queueing reactions
var result=target.clear();if(hadItems){trigger(target,"clear"/* CLEAR */,undefined,undefined);}return result;}function createForEach(isReadonly,isShallow){return function forEach(callback,thisArg){var observed=this;var target=observed["__v_raw"/* RAW */];var rawTarget=toRaw(target);var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,ITERATE_KEY);return target.forEach(function(value,key){// important: make sure the callback is
// 1. invoked with the reactive map as `this` and 3rd arg
// 2. the value received should be a corresponding reactive/readonly.
return callback.call(thisArg,wrap(value),wrap(key),observed);});};}function createIterableMethod(method,isReadonly,isShallow){return function(){var target=this["__v_raw"/* RAW */];var rawTarget=toRaw(target);var targetIsMap=isMap(rawTarget);var isPair=method==='entries'||method===Symbol.iterator&&targetIsMap;var isKeyOnly=method==='keys'&&targetIsMap;var innerIterator=target[method].apply(target,arguments);var wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,isKeyOnly?MAP_KEY_ITERATE_KEY:ITERATE_KEY);// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return _defineProperty({// iterator protocol
next:function next(){var _innerIterator$next=innerIterator.next(),value=_innerIterator$next.value,done=_innerIterator$next.done;return done?{value:value,done:done}:{value:isPair?[wrap(value[0]),wrap(value[1])]:wrap(value),done:done};}},Symbol.iterator,function(){return this;});};}function createReadonlyMethod(type){return function(){return type==="delete"/* DELETE */?false:this;};}function createInstrumentations(){var mutableInstrumentations={get:function get(key){return get$1(this,key);},get size(){return size(this);},has:has$1,add:add,set:set$1,delete:deleteEntry,clear:clear,forEach:createForEach(false,false)};var shallowInstrumentations={get:function get(key){return get$1(this,key,false,true);},get size(){return size(this);},has:has$1,add:add,set:set$1,delete:deleteEntry,clear:clear,forEach:createForEach(false,true)};var readonlyInstrumentations={get:function get(key){return get$1(this,key,true);},get size(){return size(this,true);},has:function has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,false)};var shallowReadonlyInstrumentations={get:function get(key){return get$1(this,key,true,true);},get size(){return size(this,true);},has:function has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,true)};var iteratorMethods=['keys','values','entries',Symbol.iterator];iteratorMethods.forEach(function(method){mutableInstrumentations[method]=createIterableMethod(method,false,false);readonlyInstrumentations[method]=createIterableMethod(method,true,false);shallowInstrumentations[method]=createIterableMethod(method,false,true);shallowReadonlyInstrumentations[method]=createIterableMethod(method,true,true);});return[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations];}var _createInstrumentatio=/* #__PURE__*/createInstrumentations(),_createInstrumentatio2=_slicedToArray(_createInstrumentatio,4),mutableInstrumentations=_createInstrumentatio2[0],readonlyInstrumentations=_createInstrumentatio2[1],shallowInstrumentations=_createInstrumentatio2[2],shallowReadonlyInstrumentations=_createInstrumentatio2[3];function createInstrumentationGetter(isReadonly,shallow){var instrumentations=shallow?isReadonly?shallowReadonlyInstrumentations:shallowInstrumentations:isReadonly?readonlyInstrumentations:mutableInstrumentations;return function(target,key,receiver){if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_raw"/* RAW */){return target;}return Reflect.get(hasOwn(instrumentations,key)&&key in target?instrumentations:target,key,receiver);};}var mutableCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,false)};var shallowCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,true)};var readonlyCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(true,false)};var reactiveMap=new WeakMap();var shallowReactiveMap=new WeakMap();var readonlyMap=new WeakMap();var shallowReadonlyMap=new WeakMap();function targetTypeMap(rawType){switch(rawType){case'Object':case'Array':return 1/* COMMON */;case'Map':case'Set':case'WeakMap':case'WeakSet':return 2/* COLLECTION */;default:return 0/* INVALID */;}}function getTargetType(value){return value["__v_skip"/* SKIP */]||!Object.isExtensible(value)?0/* INVALID */:targetTypeMap(toRawType(value));}function reactive(target){// if trying to observe a readonly proxy, return the readonly version.
if(target&&target["__v_isReadonly"/* IS_READONLY */]){return target;}return createReactiveObject(target,false,mutableHandlers,mutableCollectionHandlers,reactiveMap);}/**
             * Return a shallowly-reactive copy of the original object, where only the root
             * level properties are reactive. It also does not auto-unwrap refs (even at the
             * root level).
             */function shallowReactive(target){return createReactiveObject(target,false,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap);}/**
             * Creates a readonly copy of the original object. Note the returned copy is not
             * made reactive, but `readonly` can be called on an already reactive object.
             */function readonly(target){return createReactiveObject(target,true,readonlyHandlers,readonlyCollectionHandlers,readonlyMap);}function createReactiveObject(target,isReadonly,baseHandlers,collectionHandlers,proxyMap){if(!isObject$2(target)){return target;}// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(target["__v_raw"/* RAW */]&&!(isReadonly&&target["__v_isReactive"/* IS_REACTIVE */])){return target;}// target already has corresponding Proxy
var existingProxy=proxyMap.get(target);if(existingProxy){return existingProxy;}// only a whitelist of value types can be observed.
var targetType=getTargetType(target);if(targetType===0/* INVALID */){return target;}var proxy=new Proxy(target,targetType===2/* COLLECTION */?collectionHandlers:baseHandlers);proxyMap.set(target,proxy);return proxy;}function isReactive(value){if(isReadonly(value)){return isReactive(value["__v_raw"/* RAW */]);}return!!(value&&value["__v_isReactive"/* IS_REACTIVE */]);}function isReadonly(value){return!!(value&&value["__v_isReadonly"/* IS_READONLY */]);}function isProxy(value){return isReactive(value)||isReadonly(value);}function toRaw(observed){var raw=observed&&observed["__v_raw"/* RAW */];return raw?toRaw(raw):observed;}function markRaw(value){def(value,"__v_skip"/* SKIP */,true);return value;}var toReactive=function toReactive(value){return isObject$2(value)?reactive(value):value;};var toReadonly=function toReadonly(value){return isObject$2(value)?readonly(value):value;};function trackRefValue(ref){if(isTracking()){ref=toRaw(ref);if(!ref.dep){ref.dep=createDep();}{trackEffects(ref.dep);}}}function triggerRefValue(ref,newVal){ref=toRaw(ref);if(ref.dep){{triggerEffects(ref.dep);}}}function isRef(r){return Boolean(r&&r.__v_isRef===true);}function ref(value){return createRef(value,false);}function createRef(rawValue,shallow){if(isRef(rawValue)){return rawValue;}return new RefImpl(rawValue,shallow);}var RefImpl=/*#__PURE__*/function(){function RefImpl(value,_shallow){_classCallCheck(this,RefImpl);this._shallow=_shallow;this.dep=undefined;this.__v_isRef=true;this._rawValue=_shallow?value:toRaw(value);this._value=_shallow?value:toReactive(value);}_createClass(RefImpl,[{key:"value",get:function get(){trackRefValue(this);return this._value;},set:function set(newVal){newVal=this._shallow?newVal:toRaw(newVal);if(hasChanged(newVal,this._rawValue)){this._rawValue=newVal;this._value=this._shallow?newVal:toReactive(newVal);triggerRefValue(this);}}}]);return RefImpl;}();function unref(ref){return isRef(ref)?ref.value:ref;}var shallowUnwrapHandlers={get:function get(target,key,receiver){return unref(Reflect.get(target,key,receiver));},set:function set(target,key,value,receiver){var oldValue=target[key];if(isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}else{return Reflect.set(target,key,value,receiver);}}};function proxyRefs(objectWithRefs){return isReactive(objectWithRefs)?objectWithRefs:new Proxy(objectWithRefs,shallowUnwrapHandlers);}var ComputedRefImpl=/*#__PURE__*/function(){function ComputedRefImpl(getter,_setter,isReadonly){var _this=this;_classCallCheck(this,ComputedRefImpl);this._setter=_setter;this.dep=undefined;this._dirty=true;this.__v_isRef=true;this.effect=new ReactiveEffect(getter,function(){if(!_this._dirty){_this._dirty=true;triggerRefValue(_this);}});this["__v_isReadonly"/* IS_READONLY */]=isReadonly;}_createClass(ComputedRefImpl,[{key:"value",get:function get(){// the computed ref may get wrapped by other proxies e.g. readonly() #3376
var self=toRaw(this);trackRefValue(self);if(self._dirty){self._dirty=false;self._value=self.effect.run();}return self._value;},set:function set(newValue){this._setter(newValue);}}]);return ComputedRefImpl;}();function computed(getterOrOptions,debugOptions){var getter;var setter;var onlyGetter=isFunction$1(getterOrOptions);if(onlyGetter){getter=getterOrOptions;setter=NOOP;}else{getter=getterOrOptions.get;setter=getterOrOptions.set;}var cRef=new ComputedRefImpl(getter,setter,onlyGetter||!setter);return cRef;}Promise.resolve();function emit$1(instance,event){var props=instance.vnode.props||EMPTY_OBJ;for(var _len3=arguments.length,rawArgs=new Array(_len3>2?_len3-2:0),_key4=2;_key4<_len3;_key4++){rawArgs[_key4-2]=arguments[_key4];}var args=rawArgs;var isModelListener=event.startsWith('update:');// for v-model update:xxx events, apply modifiers on args
var modelArg=isModelListener&&event.slice(7);if(modelArg&&modelArg in props){var modifiersKey="".concat(modelArg==='modelValue'?'model':modelArg,"Modifiers");var _ref7=props[modifiersKey]||EMPTY_OBJ,number=_ref7.number,trim=_ref7.trim;if(trim){args=rawArgs.map(function(a){return a.trim();});}else if(number){args=rawArgs.map(toNumber$1);}}var handlerName;var handler=props[handlerName=toHandlerKey(event)]||// also try camelCase event handler (#2249)
props[handlerName=toHandlerKey(camelize(event))];// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
if(!handler&&isModelListener){handler=props[handlerName=toHandlerKey(hyphenate(event))];}if(handler){callWithAsyncErrorHandling(handler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}var onceHandler=props[handlerName+"Once"];if(onceHandler){if(!instance.emitted){instance.emitted={};}else if(instance.emitted[handlerName]){return;}instance.emitted[handlerName]=true;callWithAsyncErrorHandling(onceHandler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}}function normalizeEmitsOptions(comp,appContext){var asMixin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var cache=appContext.emitsCache;var cached=cache.get(comp);if(cached!==undefined){return cached;}var raw=comp.emits;var normalized={};// apply mixin/extends props
var hasExtends=false;if(!isFunction$1(comp)){var extendEmits=function extendEmits(raw){var normalizedFromExtend=normalizeEmitsOptions(raw,appContext,true);if(normalizedFromExtend){hasExtends=true;extend(normalized,normalizedFromExtend);}};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendEmits);}if(comp.extends){extendEmits(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendEmits);}}if(!raw&&!hasExtends){cache.set(comp,null);return null;}if(isArray(raw)){raw.forEach(function(key){return normalized[key]=null;});}else{extend(normalized,raw);}cache.set(comp,normalized);return normalized;}// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options,key){if(!options||!isOn(key)){return false;}key=key.slice(2).replace(/Once$/,'');return hasOwn(options,key[0].toLowerCase()+key.slice(1))||hasOwn(options,hyphenate(key))||hasOwn(options,key);}/**
             * mark the current rendering instance for asset resolution (e.g.
             * resolveComponent, resolveDirective) during render
             */var currentRenderingInstance=null;var currentScopeId=null;/**
             * Note: rendering calls maybe nested. The function returns the parent rendering
             * instance if present, which should be restored after the render is done:
             *
             * ```js
             * const prev = setCurrentRenderingInstance(i)
             * // ...render
             * setCurrentRenderingInstance(prev)
             * ```
             */function setCurrentRenderingInstance(instance){var prev=currentRenderingInstance;currentRenderingInstance=instance;currentScopeId=instance&&instance.type.__scopeId||null;return prev;}/**
             * Set scope id when creating hoisted vnodes.
             * @private compiler helper
             */function pushScopeId(id){currentScopeId=id;}/**
             * Technically we no longer need this after 3.0.8 but we need to keep the same
             * API for backwards compat w/ code generated by compilers.
             * @private
             */function popScopeId(){currentScopeId=null;}/**
             * Wrap a slot function to memoize current rendering instance
             * @private compiler helper
             */function withCtx(fn){var ctx=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentRenderingInstance;var isNonScopedSlot// false only
=arguments.length>2?arguments[2]:undefined;if(!ctx)return fn;// already normalized
if(fn._n){return fn;}var renderFnWithContext=function renderFnWithContext(){// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
if(renderFnWithContext._d){setBlockTracking(-1);}var prevInstance=setCurrentRenderingInstance(ctx);var res=fn.apply(void 0,arguments);setCurrentRenderingInstance(prevInstance);if(renderFnWithContext._d){setBlockTracking(1);}return res;};// mark normalized to avoid duplicated wrapping
renderFnWithContext._n=true;// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
renderFnWithContext._c=true;// disable block tracking by default
renderFnWithContext._d=true;return renderFnWithContext;}function markAttrsAccessed(){}function renderComponentRoot(instance){var Component=instance.type,vnode=instance.vnode,proxy=instance.proxy,withProxy=instance.withProxy,props=instance.props,_instance$propsOption=_slicedToArray(instance.propsOptions,1),propsOptions=_instance$propsOption[0],slots=instance.slots,attrs=instance.attrs,emit=instance.emit,render=instance.render,renderCache=instance.renderCache,data=instance.data,setupState=instance.setupState,ctx=instance.ctx,inheritAttrs=instance.inheritAttrs;var result;var fallthroughAttrs;var prev=setCurrentRenderingInstance(instance);try{if(vnode.shapeFlag&4/* STATEFUL_COMPONENT */){// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
var proxyToUse=withProxy||proxy;result=normalizeVNode(render.call(proxyToUse,proxyToUse,renderCache,props,setupState,data,ctx));fallthroughAttrs=attrs;}else{// functional
var _render=Component;// in dev, mark attrs accessed if optional props (attrs === props)
if("production"!=='production'&&attrs===props);result=normalizeVNode(_render.length>1?_render(props,"production"!=='production'?{get attrs(){markAttrsAccessed();return attrs;},slots:slots,emit:emit}:{attrs:attrs,slots:slots,emit:emit}):_render(props,null/* we know it doesn't need it */));fallthroughAttrs=Component.props?attrs:getFunctionalFallthrough(attrs);}}catch(err){blockStack.length=0;handleError(err,instance,1/* RENDER_FUNCTION */);result=createVNode(Comment);}// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
var root=result;if(fallthroughAttrs&&inheritAttrs!==false){var keys=Object.keys(fallthroughAttrs);var _root=root,shapeFlag=_root.shapeFlag;if(keys.length){if(shapeFlag&(1/* ELEMENT */|6/* COMPONENT */)){if(propsOptions&&keys.some(isModelListener)){// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
fallthroughAttrs=filterModelListeners(fallthroughAttrs,propsOptions);}root=cloneVNode(root,fallthroughAttrs);}}}// inherit directives
if(vnode.dirs){root.dirs=root.dirs?root.dirs.concat(vnode.dirs):vnode.dirs;}// inherit transition data
if(vnode.transition){root.transition=vnode.transition;}{result=root;}setCurrentRenderingInstance(prev);return result;}function filterSingleRoot(children){var singleRoot;for(var i=0;i<children.length;i++){var child=children[i];if(isVNode(child)){// ignore user comment
if(child.type!==Comment||child.children==='v-if'){if(singleRoot){// has more than 1 non-comment child, return now
return;}else{singleRoot=child;}}}else{return;}}return singleRoot;}var getFunctionalFallthrough=function getFunctionalFallthrough(attrs){var res;for(var key in attrs){if(key==='class'||key==='style'||isOn(key)){(res||(res={}))[key]=attrs[key];}}return res;};var filterModelListeners=function filterModelListeners(attrs,props){var res={};for(var key in attrs){if(!isModelListener(key)||!(key.slice(9)in props)){res[key]=attrs[key];}}return res;};function shouldUpdateComponent(prevVNode,nextVNode,optimized){var prevProps=prevVNode.props,prevChildren=prevVNode.children,component=prevVNode.component;var nextProps=nextVNode.props,nextChildren=nextVNode.children,patchFlag=nextVNode.patchFlag;var emits=component.emitsOptions;// force child update for runtime directive or transition on component vnode.
if(nextVNode.dirs||nextVNode.transition){return true;}if(optimized&&patchFlag>=0){if(patchFlag&1024/* DYNAMIC_SLOTS */){// slot content that references values that might have changed,
// e.g. in a v-for
return true;}if(patchFlag&16/* FULL_PROPS */){if(!prevProps){return!!nextProps;}// presence of this flag indicates props are always non-null
return hasPropsChanged(prevProps,nextProps,emits);}else if(patchFlag&8/* PROPS */){var dynamicProps=nextVNode.dynamicProps;for(var i=0;i<dynamicProps.length;i++){var key=dynamicProps[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emits,key)){return true;}}}}else{// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
if(prevChildren||nextChildren){if(!nextChildren||!nextChildren.$stable){return true;}}if(prevProps===nextProps){return false;}if(!prevProps){return!!nextProps;}if(!nextProps){return true;}return hasPropsChanged(prevProps,nextProps,emits);}return false;}function hasPropsChanged(prevProps,nextProps,emitsOptions){var nextKeys=Object.keys(nextProps);if(nextKeys.length!==Object.keys(prevProps).length){return true;}for(var i=0;i<nextKeys.length;i++){var key=nextKeys[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emitsOptions,key)){return true;}}return false;}function updateHOCHostEl(_ref8,el// HostNode
){var vnode=_ref8.vnode,parent=_ref8.parent;while(parent&&parent.subTree===vnode){(vnode=parent.vnode).el=el;parent=parent.parent;}}var isSuspense=function isSuspense(type){return type.__isSuspense;};// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
var SuspenseImpl={name:'Suspense',// In order to make Suspense tree-shakable, we need to avoid importing it
// directly in the renderer. The renderer checks for the __isSuspense flag
// on a vnode's type and calls the `process` method, passing in renderer
// internals.
__isSuspense:true,process:function process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,// platform-specific impl passed from renderer
rendererInternals){if(n1==null){mountSuspense(n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals);}else{patchSuspense(n1,n2,container,anchor,parentComponent,isSVG,slotScopeIds,optimized,rendererInternals);}},hydrate:hydrateSuspense,create:createSuspenseBoundary,normalize:normalizeSuspenseChildren};// Force-casted public typing for h and TSX props inference
var Suspense=exports('S',SuspenseImpl);function triggerEvent(vnode,name){var eventListener=vnode.props&&vnode.props[name];if(isFunction$1(eventListener)){eventListener();}}function mountSuspense(vnode,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals){var patch=rendererInternals.p,createElement=rendererInternals.o.createElement;var hiddenContainer=createElement('div');var suspense=vnode.suspense=createSuspenseBoundary(vnode,parentSuspense,parentComponent,container,hiddenContainer,anchor,isSVG,slotScopeIds,optimized,rendererInternals);// start mounting the content subtree in an off-dom container
patch(null,suspense.pendingBranch=vnode.ssContent,hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds);// now check if we have encountered any async deps
if(suspense.deps>0){// has async
// invoke @fallback event
triggerEvent(vnode,'onPending');triggerEvent(vnode,'onFallback');// mount the fallback tree
patch(null,vnode.ssFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds);setActiveBranch(suspense,vnode.ssFallback);}else{// Suspense has no async deps. Just resolve.
suspense.resolve();}}function patchSuspense(n1,n2,container,anchor,parentComponent,isSVG,slotScopeIds,optimized,_ref9){var patch=_ref9.p,unmount=_ref9.um,createElement=_ref9.o.createElement;var suspense=n2.suspense=n1.suspense;suspense.vnode=n2;n2.el=n1.el;var newBranch=n2.ssContent;var newFallback=n2.ssFallback;var activeBranch=suspense.activeBranch,pendingBranch=suspense.pendingBranch,isInFallback=suspense.isInFallback,isHydrating=suspense.isHydrating;if(pendingBranch){suspense.pendingBranch=newBranch;if(isSameVNodeType(newBranch,pendingBranch)){// same root type but content may have changed.
patch(pendingBranch,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}else if(isInFallback){patch(activeBranch,newFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newFallback);}}else{// toggled before pending tree is resolved
suspense.pendingId++;if(isHydrating){// if toggled before hydration is finished, the current DOM tree is
// no longer valid. set it as the active branch so it will be unmounted
// when resolved
suspense.isHydrating=false;suspense.activeBranch=pendingBranch;}else{unmount(pendingBranch,parentComponent,suspense);}// increment pending ID. this is used to invalidate async callbacks
// reset suspense state
suspense.deps=0;// discard effects from pending branch
suspense.effects.length=0;// discard previous container
suspense.hiddenContainer=createElement('div');if(isInFallback){// already in fallback state
patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}else{patch(activeBranch,newFallback,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newFallback);}}else if(activeBranch&&isSameVNodeType(newBranch,activeBranch)){// toggled "back" to current active branch
patch(activeBranch,newBranch,container,anchor,parentComponent,suspense,isSVG,slotScopeIds,optimized);// force resolve
suspense.resolve(true);}else{// switched to a 3rd branch
patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){suspense.resolve();}}}}else{if(activeBranch&&isSameVNodeType(newBranch,activeBranch)){// root did not change, just normal patch
patch(activeBranch,newBranch,container,anchor,parentComponent,suspense,isSVG,slotScopeIds,optimized);setActiveBranch(suspense,newBranch);}else{// root node toggled
// invoke @pending event
triggerEvent(n2,'onPending');// mount pending branch in off-dom container
suspense.pendingBranch=newBranch;suspense.pendingId++;patch(null,newBranch,suspense.hiddenContainer,null,parentComponent,suspense,isSVG,slotScopeIds,optimized);if(suspense.deps<=0){// incoming branch has no async deps, resolve now.
suspense.resolve();}else{var timeout=suspense.timeout,pendingId=suspense.pendingId;if(timeout>0){setTimeout(function(){if(suspense.pendingId===pendingId){suspense.fallback(newFallback);}},timeout);}else if(timeout===0){suspense.fallback(newFallback);}}}}}function createSuspenseBoundary(vnode,parent,parentComponent,container,hiddenContainer,anchor,isSVG,slotScopeIds,optimized,rendererInternals){var isHydrating=arguments.length>10&&arguments[10]!==undefined?arguments[10]:false;var patch=rendererInternals.p,_move=rendererInternals.m,_unmount=rendererInternals.um,_next=rendererInternals.n,_rendererInternals$o=rendererInternals.o,parentNode=_rendererInternals$o.parentNode,remove=_rendererInternals$o.remove;var timeout=toNumber$1(vnode.props&&vnode.props.timeout);var suspense={vnode:vnode,parent:parent,parentComponent:parentComponent,isSVG:isSVG,container:container,hiddenContainer:hiddenContainer,anchor:anchor,deps:0,pendingId:0,timeout:typeof timeout==='number'?timeout:-1,activeBranch:null,pendingBranch:null,isInFallback:true,isHydrating:isHydrating,isUnmounted:false,effects:[],resolve:function resolve(){var resume=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var vnode=suspense.vnode,activeBranch=suspense.activeBranch,pendingBranch=suspense.pendingBranch,pendingId=suspense.pendingId,effects=suspense.effects,parentComponent=suspense.parentComponent,container=suspense.container;if(suspense.isHydrating){suspense.isHydrating=false;}else if(!resume){var delayEnter=activeBranch&&pendingBranch.transition&&pendingBranch.transition.mode==='out-in';if(delayEnter){activeBranch.transition.afterLeave=function(){if(pendingId===suspense.pendingId){_move(pendingBranch,container,_anchor,0/* ENTER */);}};}// this is initial anchor on mount
var _anchor=suspense.anchor;// unmount current active tree
if(activeBranch){// if the fallback tree was mounted, it may have been moved
// as part of a parent suspense. get the latest anchor for insertion
_anchor=_next(activeBranch);_unmount(activeBranch,parentComponent,suspense,true);}if(!delayEnter){// move content from off-dom container to actual container
_move(pendingBranch,container,_anchor,0/* ENTER */);}}setActiveBranch(suspense,pendingBranch);suspense.pendingBranch=null;suspense.isInFallback=false;// flush buffered effects
// check if there is a pending parent suspense
var parent=suspense.parent;var hasUnresolvedAncestor=false;while(parent){if(parent.pendingBranch){var _parent$effects;// found a pending parent suspense, merge buffered post jobs
// into that parent
(_parent$effects=parent.effects).push.apply(_parent$effects,_toConsumableArray(effects));hasUnresolvedAncestor=true;break;}parent=parent.parent;}// no pending parent suspense, flush all jobs
if(!hasUnresolvedAncestor){queuePostFlushCb(effects);}suspense.effects=[];// invoke @resolve event
triggerEvent(vnode,'onResolve');},fallback:function fallback(fallbackVNode){if(!suspense.pendingBranch){return;}var vnode=suspense.vnode,activeBranch=suspense.activeBranch,parentComponent=suspense.parentComponent,container=suspense.container,isSVG=suspense.isSVG;// invoke @fallback event
triggerEvent(vnode,'onFallback');var anchor=_next(activeBranch);var mountFallback=function mountFallback(){if(!suspense.isInFallback){return;}// mount the fallback tree
patch(null,fallbackVNode,container,anchor,parentComponent,null,// fallback tree will not have suspense context
isSVG,slotScopeIds,optimized);setActiveBranch(suspense,fallbackVNode);};var delayEnter=fallbackVNode.transition&&fallbackVNode.transition.mode==='out-in';if(delayEnter){activeBranch.transition.afterLeave=mountFallback;}suspense.isInFallback=true;// unmount current active branch
_unmount(activeBranch,parentComponent,null,// no suspense so unmount hooks fire now
true// shouldRemove
);if(!delayEnter){mountFallback();}},move:function move(container,anchor,type){suspense.activeBranch&&_move(suspense.activeBranch,container,anchor,type);suspense.container=container;},next:function next(){return suspense.activeBranch&&_next(suspense.activeBranch);},registerDep:function registerDep(instance,setupRenderEffect){var isInPendingSuspense=!!suspense.pendingBranch;if(isInPendingSuspense){suspense.deps++;}var hydratedEl=instance.vnode.el;instance.asyncDep.catch(function(err){handleError(err,instance,0/* SETUP_FUNCTION */);}).then(function(asyncSetupResult){// retry when the setup() promise resolves.
// component may have been unmounted before resolve.
if(instance.isUnmounted||suspense.isUnmounted||suspense.pendingId!==instance.suspenseId){return;}// retry from this component
instance.asyncResolved=true;var vnode=instance.vnode;handleSetupResult(instance,asyncSetupResult,false);if(hydratedEl){// vnode may have been replaced if an update happened before the
// async dep is resolved.
vnode.el=hydratedEl;}var placeholder=!hydratedEl&&instance.subTree.el;setupRenderEffect(instance,vnode,// component may have been moved before resolve.
// if this is not a hydration, instance.subTree will be the comment
// placeholder.
parentNode(hydratedEl||instance.subTree.el),// anchor will not be used if this is hydration, so only need to
// consider the comment placeholder case.
hydratedEl?null:_next(instance.subTree),suspense,isSVG,optimized);if(placeholder){remove(placeholder);}updateHOCHostEl(instance,vnode.el);// only decrease deps count if suspense is not already resolved
if(isInPendingSuspense&&--suspense.deps===0){suspense.resolve();}});},unmount:function unmount(parentSuspense,doRemove){suspense.isUnmounted=true;if(suspense.activeBranch){_unmount(suspense.activeBranch,parentComponent,parentSuspense,doRemove);}if(suspense.pendingBranch){_unmount(suspense.pendingBranch,parentComponent,parentSuspense,doRemove);}}};return suspense;}function hydrateSuspense(node,vnode,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,rendererInternals,hydrateNode){/* eslint-disable no-restricted-globals */var suspense=vnode.suspense=createSuspenseBoundary(vnode,parentSuspense,parentComponent,node.parentNode,document.createElement('div'),null,isSVG,slotScopeIds,optimized,rendererInternals,true/* hydrating */);// there are two possible scenarios for server-rendered suspense:
// - success: ssr content should be fully resolved
// - failure: ssr content should be the fallback branch.
// however, on the client we don't really know if it has failed or not
// attempt to hydrate the DOM assuming it has succeeded, but we still
// need to construct a suspense boundary first
var result=hydrateNode(node,suspense.pendingBranch=vnode.ssContent,parentComponent,suspense,slotScopeIds,optimized);if(suspense.deps===0){suspense.resolve();}return result;/* eslint-enable no-restricted-globals */}function normalizeSuspenseChildren(vnode){var shapeFlag=vnode.shapeFlag,children=vnode.children;var isSlotChildren=shapeFlag&32/* SLOTS_CHILDREN */;vnode.ssContent=normalizeSuspenseSlot(isSlotChildren?children.default:children);vnode.ssFallback=isSlotChildren?normalizeSuspenseSlot(children.fallback):createVNode(Comment);}function normalizeSuspenseSlot(s){var block;if(isFunction$1(s)){var trackBlock=isBlockTreeEnabled&&s._c;if(trackBlock){// disableTracking: false
// allow block tracking for compiled slots
// (see ./componentRenderContext.ts)
s._d=false;openBlock();}s=s();if(trackBlock){s._d=true;block=currentBlock;closeBlock();}}if(isArray(s)){var singleChild=filterSingleRoot(s);s=singleChild;}s=normalizeVNode(s);if(block&&!s.dynamicChildren){s.dynamicChildren=block.filter(function(c){return c!==s;});}return s;}function queueEffectWithSuspense(fn,suspense){if(suspense&&suspense.pendingBranch){if(isArray(fn)){var _suspense$effects;(_suspense$effects=suspense.effects).push.apply(_suspense$effects,_toConsumableArray(fn));}else{suspense.effects.push(fn);}}else{queuePostFlushCb(fn);}}function setActiveBranch(suspense,branch){suspense.activeBranch=branch;var vnode=suspense.vnode,parentComponent=suspense.parentComponent;var el=vnode.el=branch.el;// in case suspense is the root node of a component,
// recursively update the HOC el
if(parentComponent&&parentComponent.subTree===vnode){parentComponent.vnode.el=el;updateHOCHostEl(parentComponent,el);}}function provide(key,value){if(!currentInstance);else{var provides=currentInstance.provides;// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
var parentProvides=currentInstance.parent&&currentInstance.parent.provides;if(parentProvides===provides){provides=currentInstance.provides=Object.create(parentProvides);}// TS doesn't allow symbol as index type
provides[key]=value;}}function inject(key,defaultValue){var treatDefaultAsFactory=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
var instance=currentInstance||currentRenderingInstance;if(instance){// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the intance is at root
var provides=instance.parent==null?instance.vnode.appContext&&instance.vnode.appContext.provides:instance.parent.provides;if(provides&&key in provides){// TS doesn't allow symbol as index type
return provides[key];}else if(arguments.length>1){return treatDefaultAsFactory&&isFunction$1(defaultValue)?defaultValue.call(instance.proxy):defaultValue;}else;}}// implementation, close to no-op
function defineComponent(options){return isFunction$1(options)?{setup:options,name:options.name}:options;}var isAsyncWrapper=function isAsyncWrapper(i){return!!i.type.__asyncLoader;};var isKeepAlive=function isKeepAlive(vnode){return vnode.type.__isKeepAlive;};function onActivated(hook,target){registerKeepAliveHook(hook,"a"/* ACTIVATED */,target);}function onDeactivated(hook,target){registerKeepAliveHook(hook,"da"/* DEACTIVATED */,target);}function registerKeepAliveHook(hook,type){var target=arguments.length>2&&arguments[2]!==undefined?arguments[2]:currentInstance;// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
var wrappedHook=hook.__wdc||(hook.__wdc=function(){// only fire the hook if the target instance is NOT in a deactivated branch.
var current=target;while(current){if(current.isDeactivated){return;}current=current.parent;}hook();});injectHook(type,wrappedHook,target);// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(target){var current=target.parent;while(current&&current.parent){if(isKeepAlive(current.parent.vnode)){injectToKeepAliveRoot(wrappedHook,type,target,current);}current=current.parent;}}}function injectToKeepAliveRoot(hook,type,target,keepAliveRoot){// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
var injected=injectHook(type,hook,keepAliveRoot,true/* prepend */);onUnmounted(function(){remove(keepAliveRoot[type],injected);},target);}function injectHook(type,hook){var target=arguments.length>2&&arguments[2]!==undefined?arguments[2]:currentInstance;var prepend=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(target){var hooks=target[type]||(target[type]=[]);// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
var wrappedHook=hook.__weh||(hook.__weh=function(){if(target.isUnmounted){return;}// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
setCurrentInstance(target);for(var _len4=arguments.length,args=new Array(_len4),_key5=0;_key5<_len4;_key5++){args[_key5]=arguments[_key5];}var res=callWithAsyncErrorHandling(hook,target,type,args);unsetCurrentInstance();resetTracking();return res;});if(prepend){hooks.unshift(wrappedHook);}else{hooks.push(wrappedHook);}return wrappedHook;}}var createHook=function createHook(lifecycle){return function(hook){var target=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentInstance;return(// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup||lifecycle==="sp"/* SERVER_PREFETCH */)&&injectHook(lifecycle,hook,target));};};var onBeforeMount=exports('m',createHook("bm"/* BEFORE_MOUNT */));var onMounted=createHook("m"/* MOUNTED */);var onBeforeUpdate=createHook("bu"/* BEFORE_UPDATE */);var onUpdated=createHook("u"/* UPDATED */);var onBeforeUnmount=createHook("bum"/* BEFORE_UNMOUNT */);var onUnmounted=createHook("um"/* UNMOUNTED */);var onServerPrefetch=createHook("sp"/* SERVER_PREFETCH */);var onRenderTriggered=createHook("rtg"/* RENDER_TRIGGERED */);var onRenderTracked=createHook("rtc"/* RENDER_TRACKED */);function onErrorCaptured(hook){var target=arguments.length>1&&arguments[1]!==undefined?arguments[1]:currentInstance;injectHook("ec"/* ERROR_CAPTURED */,hook,target);}var shouldCacheAccess=true;function applyOptions(instance){var options=resolveMergedOptions(instance);var publicThis=instance.proxy;var ctx=instance.ctx;// do not cache property access on public proxy during state initialization
shouldCacheAccess=false;// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
if(options.beforeCreate){callHook(options.beforeCreate,instance,"bc"/* BEFORE_CREATE */);}var dataOptions=options.data,computedOptions=options.computed,methods=options.methods,watchOptions=options.watch,provideOptions=options.provide,injectOptions=options.inject,created=options.created,beforeMount=options.beforeMount,mounted=options.mounted,beforeUpdate=options.beforeUpdate,updated=options.updated,activated=options.activated,deactivated=options.deactivated,beforeDestroy=options.beforeDestroy,beforeUnmount=options.beforeUnmount,destroyed=options.destroyed,unmounted=options.unmounted,render=options.render,renderTracked=options.renderTracked,renderTriggered=options.renderTriggered,errorCaptured=options.errorCaptured,serverPrefetch=options.serverPrefetch,expose=options.expose,inheritAttrs=options.inheritAttrs,components=options.components,directives=options.directives,filters=options.filters;var checkDuplicateProperties=null;// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
if(injectOptions){resolveInjections(injectOptions,ctx,checkDuplicateProperties,instance.appContext.config.unwrapInjectedRef);}if(methods){for(var key in methods){var methodHandler=methods[key];if(isFunction$1(methodHandler)){// In dev mode, we use the `createRenderContext` function to define
// methods to the proxy target, and those are read-only but
// reconfigurable, so it needs to be redefined here
{ctx[key]=methodHandler.bind(publicThis);}}}}if(dataOptions){var data=dataOptions.call(publicThis,publicThis);if(!isObject$2(data));else{instance.data=reactive(data);}}// state initialization complete at this point - start caching access
shouldCacheAccess=true;if(computedOptions){var _loop=function _loop(_key6){var opt=computedOptions[_key6];var get=isFunction$1(opt)?opt.bind(publicThis,publicThis):isFunction$1(opt.get)?opt.get.bind(publicThis,publicThis):NOOP;var set=!isFunction$1(opt)&&isFunction$1(opt.set)?opt.set.bind(publicThis):NOOP;var c=computed({get:get,set:set});Object.defineProperty(ctx,_key6,{enumerable:true,configurable:true,get:function get(){return c.value;},set:function set(v){return c.value=v;}});};for(var _key6 in computedOptions){_loop(_key6);}}if(watchOptions){for(var _key7 in watchOptions){createWatcher(watchOptions[_key7],ctx,publicThis,_key7);}}if(provideOptions){var provides=isFunction$1(provideOptions)?provideOptions.call(publicThis):provideOptions;Reflect.ownKeys(provides).forEach(function(key){provide(key,provides[key]);});}if(created){callHook(created,instance,"c"/* CREATED */);}function registerLifecycleHook(register,hook){if(isArray(hook)){hook.forEach(function(_hook){return register(_hook.bind(publicThis));});}else if(hook){register(hook.bind(publicThis));}}registerLifecycleHook(onBeforeMount,beforeMount);registerLifecycleHook(onMounted,mounted);registerLifecycleHook(onBeforeUpdate,beforeUpdate);registerLifecycleHook(onUpdated,updated);registerLifecycleHook(onActivated,activated);registerLifecycleHook(onDeactivated,deactivated);registerLifecycleHook(onErrorCaptured,errorCaptured);registerLifecycleHook(onRenderTracked,renderTracked);registerLifecycleHook(onRenderTriggered,renderTriggered);registerLifecycleHook(onBeforeUnmount,beforeUnmount);registerLifecycleHook(onUnmounted,unmounted);registerLifecycleHook(onServerPrefetch,serverPrefetch);if(isArray(expose)){if(expose.length){var exposed=instance.exposed||(instance.exposed={});expose.forEach(function(key){Object.defineProperty(exposed,key,{get:function get(){return publicThis[key];},set:function set(val){return publicThis[key]=val;}});});}else if(!instance.exposed){instance.exposed={};}}// options that are handled when creating the instance but also need to be
// applied from mixins
if(render&&instance.render===NOOP){instance.render=render;}if(inheritAttrs!=null){instance.inheritAttrs=inheritAttrs;}// asset options.
if(components)instance.components=components;if(directives)instance.directives=directives;}function resolveInjections(injectOptions,ctx){var checkDuplicateProperties=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NOOP;var unwrapRef=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(isArray(injectOptions)){injectOptions=normalizeInject(injectOptions);}var _loop2=function _loop2(key){var opt=injectOptions[key];var injected=void 0;if(isObject$2(opt)){if('default'in opt){injected=inject(opt.from||key,opt.default,true/* treat default function as factory */);}else{injected=inject(opt.from||key);}}else{injected=inject(opt);}if(isRef(injected)){// TODO remove the check in 3.3
if(unwrapRef){Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:function get(){return injected.value;},set:function set(v){return injected.value=v;}});}else{ctx[key]=injected;}}else{ctx[key]=injected;}};for(var key in injectOptions){_loop2(key);}}function callHook(hook,instance,type){callWithAsyncErrorHandling(isArray(hook)?hook.map(function(h){return h.bind(instance.proxy);}):hook.bind(instance.proxy),instance,type);}function createWatcher(raw,ctx,publicThis,key){var getter=key.includes('.')?createPathGetter(publicThis,key):function(){return publicThis[key];};if(isString(raw)){var handler=ctx[raw];if(isFunction$1(handler)){watch(getter,handler);}}else if(isFunction$1(raw)){watch(getter,raw.bind(publicThis));}else if(isObject$2(raw)){if(isArray(raw)){raw.forEach(function(r){return createWatcher(r,ctx,publicThis,key);});}else{var _handler=isFunction$1(raw.handler)?raw.handler.bind(publicThis):ctx[raw.handler];if(isFunction$1(_handler)){watch(getter,_handler,raw);}}}else;}/**
             * Resolve merged options and cache it on the component.
             * This is done only once per-component since the merging does not involve
             * instances.
             */function resolveMergedOptions(instance){var base=instance.type;var mixins=base.mixins,extendsOptions=base.extends;var _instance$appContext=instance.appContext,globalMixins=_instance$appContext.mixins,cache=_instance$appContext.optionsCache,optionMergeStrategies=_instance$appContext.config.optionMergeStrategies;var cached=cache.get(base);var resolved;if(cached){resolved=cached;}else if(!globalMixins.length&&!mixins&&!extendsOptions){{resolved=base;}}else{resolved={};if(globalMixins.length){globalMixins.forEach(function(m){return mergeOptions(resolved,m,optionMergeStrategies,true);});}mergeOptions(resolved,base,optionMergeStrategies);}cache.set(base,resolved);return resolved;}function mergeOptions(to,from,strats){var asMixin=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var mixins=from.mixins,extendsOptions=from.extends;if(extendsOptions){mergeOptions(to,extendsOptions,strats,true);}if(mixins){mixins.forEach(function(m){return mergeOptions(to,m,strats,true);});}for(var key in from){if(asMixin&&key==='expose');else{var strat=internalOptionMergeStrats[key]||strats&&strats[key];to[key]=strat?strat(to[key],from[key]):from[key];}}return to;}var internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,// objects
methods:mergeObjectOptions,computed:mergeObjectOptions,// lifecycle
beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,// assets
components:mergeObjectOptions,directives:mergeObjectOptions,// watch
watch:mergeWatchOptions,// provide / inject
provide:mergeDataFn,inject:mergeInject};function mergeDataFn(to,from){if(!from){return to;}if(!to){return from;}return function mergedDataFn(){return extend(isFunction$1(to)?to.call(this,this):to,isFunction$1(from)?from.call(this,this):from);};}function mergeInject(to,from){return mergeObjectOptions(normalizeInject(to),normalizeInject(from));}function normalizeInject(raw){if(isArray(raw)){var res={};for(var i=0;i<raw.length;i++){res[raw[i]]=raw[i];}return res;}return raw;}function mergeAsArray(to,from){return to?_toConsumableArray(new Set([].concat(to,from))):from;}function mergeObjectOptions(to,from){return to?extend(extend(Object.create(null),to),from):from;}function mergeWatchOptions(to,from){if(!to)return from;if(!from)return to;var merged=extend(Object.create(null),to);for(var key in from){merged[key]=mergeAsArray(to[key],from[key]);}return merged;}function initProps(instance,rawProps,isStateful){var isSSR=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var props={};var attrs={};def(attrs,InternalObjectKey,1);instance.propsDefaults=Object.create(null);setFullProps(instance,rawProps,props,attrs);// ensure all declared prop keys are present
for(var key in instance.propsOptions[0]){if(!(key in props)){props[key]=undefined;}}if(isStateful){// stateful
instance.props=isSSR?props:shallowReactive(props);}else{if(!instance.type.props){// functional w/ optional props, props === attrs
instance.props=attrs;}else{// functional w/ declared props
instance.props=props;}}instance.attrs=attrs;}function updateProps(instance,rawProps,rawPrevProps,optimized){var props=instance.props,attrs=instance.attrs,patchFlag=instance.vnode.patchFlag;var rawCurrentProps=toRaw(props);var _instance$propsOption2=_slicedToArray(instance.propsOptions,1),options=_instance$propsOption2[0];var hasAttrsChanged=false;if(// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
(optimized||patchFlag>0)&&!(patchFlag&16/* FULL_PROPS */)){if(patchFlag&8/* PROPS */){// Compiler-generated props & no keys change, just set the updated
// the props.
var propsToUpdate=instance.vnode.dynamicProps;for(var i=0;i<propsToUpdate.length;i++){var key=propsToUpdate[i];// PROPS flag guarantees rawProps to be non-null
var value=rawProps[key];if(options){// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(hasOwn(attrs,key)){if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}else{var camelizedKey=camelize(key);props[camelizedKey]=resolvePropValue(options,rawCurrentProps,camelizedKey,value,instance,false/* isAbsent */);}}else{if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}}else{// full props update.
if(setFullProps(instance,rawProps,props,attrs)){hasAttrsChanged=true;}// in case of dynamic props, check if we need to delete keys from
// the props object
var kebabKey;for(var _key8 in rawCurrentProps){if(!rawProps||!hasOwn(rawProps,_key8)&&((kebabKey=hyphenate(_key8))===_key8||!hasOwn(rawProps,kebabKey))){if(options){if(rawPrevProps&&(rawPrevProps[_key8]!==undefined||// for kebab-case
rawPrevProps[kebabKey]!==undefined)){props[_key8]=resolvePropValue(options,rawCurrentProps,_key8,undefined,instance,true/* isAbsent */);}}else{delete props[_key8];}}}// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(attrs!==rawCurrentProps){for(var _key9 in attrs){if(!rawProps||!hasOwn(rawProps,_key9)){delete attrs[_key9];hasAttrsChanged=true;}}}}// trigger updates for $attrs in case it's used in component slots
if(hasAttrsChanged){trigger(instance,"set"/* SET */,'$attrs');}}function setFullProps(instance,rawProps,props,attrs){var _instance$propsOption3=_slicedToArray(instance.propsOptions,2),options=_instance$propsOption3[0],needCastKeys=_instance$propsOption3[1];var hasAttrsChanged=false;var rawCastValues;if(rawProps){for(var key in rawProps){// key, ref are reserved and never passed down
if(isReservedProp(key)){continue;}var value=rawProps[key];// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
var camelKey=void 0;if(options&&hasOwn(options,camelKey=camelize(key))){if(!needCastKeys||!needCastKeys.includes(camelKey)){props[camelKey]=value;}else{(rawCastValues||(rawCastValues={}))[camelKey]=value;}}else if(!isEmitListener(instance.emitsOptions,key)){if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}if(needCastKeys){var rawCurrentProps=toRaw(props);var castValues=rawCastValues||EMPTY_OBJ;for(var i=0;i<needCastKeys.length;i++){var _key10=needCastKeys[i];props[_key10]=resolvePropValue(options,rawCurrentProps,_key10,castValues[_key10],instance,!hasOwn(castValues,_key10));}}return hasAttrsChanged;}function resolvePropValue(options,props,key,value,instance,isAbsent){var opt=options[key];if(opt!=null){var hasDefault=hasOwn(opt,'default');// default values
if(hasDefault&&value===undefined){var defaultValue=opt.default;if(opt.type!==Function&&isFunction$1(defaultValue)){var propsDefaults=instance.propsDefaults;if(key in propsDefaults){value=propsDefaults[key];}else{setCurrentInstance(instance);value=propsDefaults[key]=defaultValue.call(null,props);unsetCurrentInstance();}}else{value=defaultValue;}}// boolean casting
if(opt[0/* shouldCast */]){if(isAbsent&&!hasDefault){value=false;}else if(opt[1/* shouldCastTrue */]&&(value===''||value===hyphenate(key))){value=true;}}}return value;}function normalizePropsOptions(comp,appContext){var asMixin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var cache=appContext.propsCache;var cached=cache.get(comp);if(cached){return cached;}var raw=comp.props;var normalized={};var needCastKeys=[];// apply mixin/extends props
var hasExtends=false;if(!isFunction$1(comp)){var extendProps=function extendProps(raw){hasExtends=true;var _normalizePropsOption=normalizePropsOptions(raw,appContext,true),_normalizePropsOption2=_slicedToArray(_normalizePropsOption,2),props=_normalizePropsOption2[0],keys=_normalizePropsOption2[1];extend(normalized,props);if(keys)needCastKeys.push.apply(needCastKeys,_toConsumableArray(keys));};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendProps);}if(comp.extends){extendProps(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendProps);}}if(!raw&&!hasExtends){cache.set(comp,EMPTY_ARR);return EMPTY_ARR;}if(isArray(raw)){for(var i=0;i<raw.length;i++){var normalizedKey=camelize(raw[i]);if(validatePropName(normalizedKey)){normalized[normalizedKey]=EMPTY_OBJ;}}}else if(raw){for(var key in raw){var _normalizedKey=camelize(key);if(validatePropName(_normalizedKey)){var opt=raw[key];var prop=normalized[_normalizedKey]=isArray(opt)||isFunction$1(opt)?{type:opt}:opt;if(prop){var booleanIndex=getTypeIndex(Boolean,prop.type);var stringIndex=getTypeIndex(String,prop.type);prop[0/* shouldCast */]=booleanIndex>-1;prop[1/* shouldCastTrue */]=stringIndex<0||booleanIndex<stringIndex;// if the prop needs boolean casting or default value
if(booleanIndex>-1||hasOwn(prop,'default')){needCastKeys.push(_normalizedKey);}}}}}var res=[normalized,needCastKeys];cache.set(comp,res);return res;}function validatePropName(key){if(key[0]!=='$'){return true;}return false;}// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor){var match=ctor&&ctor.toString().match(/^\s*function (\w+)/);return match?match[1]:ctor===null?'null':'';}function isSameType(a,b){return getType(a)===getType(b);}function getTypeIndex(type,expectedTypes){if(isArray(expectedTypes)){return expectedTypes.findIndex(function(t){return isSameType(t,type);});}else if(isFunction$1(expectedTypes)){return isSameType(expectedTypes,type)?0:-1;}return-1;}var isInternalKey=function isInternalKey(key){return key[0]==='_'||key==='$stable';};var normalizeSlotValue=function normalizeSlotValue(value){return isArray(value)?value.map(normalizeVNode):[normalizeVNode(value)];};var normalizeSlot=function normalizeSlot(key,rawSlot,ctx){var normalized=withCtx(function(){return normalizeSlotValue(rawSlot.apply(void 0,arguments));},ctx);normalized._c=false;return normalized;};var normalizeObjectSlots=function normalizeObjectSlots(rawSlots,slots,instance){var ctx=rawSlots._ctx;for(var key in rawSlots){if(isInternalKey(key))continue;var value=rawSlots[key];if(isFunction$1(value)){slots[key]=normalizeSlot(key,value,ctx);}else if(value!=null){(function(){var normalized=normalizeSlotValue(value);slots[key]=function(){return normalized;};})();}}};var normalizeVNodeSlots=function normalizeVNodeSlots(instance,children){var normalized=normalizeSlotValue(children);instance.slots.default=function(){return normalized;};};var initSlots=function initSlots(instance,children){if(instance.vnode.shapeFlag&32/* SLOTS_CHILDREN */){var type=children._;if(type){// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
instance.slots=toRaw(children);// make compiler marker non-enumerable
def(children,'_',type);}else{normalizeObjectSlots(children,instance.slots={});}}else{instance.slots={};if(children){normalizeVNodeSlots(instance,children);}}def(instance.slots,InternalObjectKey,1);};var updateSlots=function updateSlots(instance,children,optimized){var vnode=instance.vnode,slots=instance.slots;var needDeletionCheck=true;var deletionComparisonTarget=EMPTY_OBJ;if(vnode.shapeFlag&32/* SLOTS_CHILDREN */){var type=children._;if(type){// compiled slots.
if(optimized&&type===1/* STABLE */){// compiled AND stable.
// no need to update, and skip stale slots removal.
needDeletionCheck=false;}else{// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
extend(slots,children);// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
if(!optimized&&type===1/* STABLE */){delete slots._;}}}else{needDeletionCheck=!children.$stable;normalizeObjectSlots(children,slots);}deletionComparisonTarget=children;}else if(children){// non slot object children (direct value) passed to a component
normalizeVNodeSlots(instance,children);deletionComparisonTarget={default:1};}// delete stale slots
if(needDeletionCheck){for(var key in slots){if(!isInternalKey(key)&&!(key in deletionComparisonTarget)){delete slots[key];}}}};function invokeDirectiveHook(vnode,prevVNode,instance,name){var bindings=vnode.dirs;var oldBindings=prevVNode&&prevVNode.dirs;for(var i=0;i<bindings.length;i++){var binding=bindings[i];if(oldBindings){binding.oldValue=oldBindings[i].value;}var hook=binding.dir[name];if(hook){// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();callWithAsyncErrorHandling(hook,instance,8/* DIRECTIVE_HOOK */,[vnode.el,binding,vnode,prevVNode]);resetTracking();}}}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:false,globalProperties:{},optionMergeStrategies:{},errorHandler:undefined,warnHandler:undefined,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap(),propsCache:new WeakMap(),emitsCache:new WeakMap()};}var uid=0;function createAppAPI(render,hydrate){return function createApp(rootComponent){var rootProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(rootProps!=null&&!isObject$2(rootProps)){rootProps=null;}var context=createAppContext();var installedPlugins=new Set();var isMounted=false;var app=context.app={_uid:uid++,_component:rootComponent,_props:rootProps,_container:null,_context:context,_instance:null,version:version,get config(){return context.config;},set config(v){},use:function use(plugin){for(var _len5=arguments.length,options=new Array(_len5>1?_len5-1:0),_key11=1;_key11<_len5;_key11++){options[_key11-1]=arguments[_key11];}if(installedPlugins.has(plugin));else if(plugin&&isFunction$1(plugin.install)){installedPlugins.add(plugin);plugin.install.apply(plugin,[app].concat(options));}else if(isFunction$1(plugin)){installedPlugins.add(plugin);plugin.apply(void 0,[app].concat(options));}else;return app;},mixin:function mixin(_mixin){{if(!context.mixins.includes(_mixin)){context.mixins.push(_mixin);}}return app;},component:function component(name,_component){if(!_component){return context.components[name];}context.components[name]=_component;return app;},directive:function directive(name,_directive){if(!_directive){return context.directives[name];}context.directives[name]=_directive;return app;},mount:function mount(rootContainer,isHydrate,isSVG){if(!isMounted){var vnode=createVNode(rootComponent,rootProps);// store app context on the root VNode.
// this will be set on the root instance on initial mount.
vnode.appContext=context;if(isHydrate&&hydrate){hydrate(vnode,rootContainer);}else{render(vnode,rootContainer,isSVG);}isMounted=true;app._container=rootContainer;rootContainer.__vue_app__=app;return getExposeProxy(vnode.component)||vnode.component.proxy;}},unmount:function unmount(){if(isMounted){render(null,app._container);delete app._container.__vue_app__;}},provide:function provide(key,value){// TypeScript doesn't allow symbols as index type
// https://github.com/Microsoft/TypeScript/issues/24587
context.provides[key]=value;return app;}};return app;};}var queuePostRenderEffect=queueEffectWithSuspense;/**
             * The createRenderer function accepts two generic arguments:
             * HostNode and HostElement, corresponding to Node and Element types in the
             * host environment. For example, for runtime-dom, HostNode would be the DOM
             * `Node` interface and HostElement would be the DOM `Element` interface.
             *
             * Custom renderers can pass in the platform specific types like this:
             *
             * ``` js
             * const { render, createApp } = createRenderer<Node, Element>({
             *   patchProp,
             *   ...nodeOps
             * })
             * ```
             */function createRenderer(options){return baseCreateRenderer(options);}// implementation
function baseCreateRenderer(options,createHydrationFns){var target=getGlobalThis();target.__VUE__=true;var hostInsert=options.insert,hostRemove=options.remove,hostPatchProp=options.patchProp,hostCreateElement=options.createElement,hostCreateText=options.createText,hostCreateComment=options.createComment,hostSetText=options.setText,hostSetElementText=options.setElementText,hostParentNode=options.parentNode,hostNextSibling=options.nextSibling,_options$setScopeId=options.setScopeId,hostSetScopeId=_options$setScopeId===void 0?NOOP:_options$setScopeId,hostCloneNode=options.cloneNode,hostInsertStaticContent=options.insertStaticContent;// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
var patch=function patch(n1,n2,container){var anchor=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var parentComponent=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var parentSuspense=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;var isSVG=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;var slotScopeIds=arguments.length>7&&arguments[7]!==undefined?arguments[7]:null;var optimized=arguments.length>8&&arguments[8]!==undefined?arguments[8]:!!n2.dynamicChildren;if(n1===n2){return;}// patching & not same type, unmount old tree
if(n1&&!isSameVNodeType(n1,n2)){anchor=getNextHostNode(n1);unmount(n1,parentComponent,parentSuspense,true);n1=null;}if(n2.patchFlag===-2/* BAIL */){optimized=false;n2.dynamicChildren=null;}var type=n2.type,ref=n2.ref,shapeFlag=n2.shapeFlag;switch(type){case Text:processText(n1,n2,container,anchor);break;case Comment:processCommentNode(n1,n2,container,anchor);break;case Static:if(n1==null){mountStaticNode(n2,container,anchor,isSVG);}break;case Fragment:processFragment(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);break;default:if(shapeFlag&1/* ELEMENT */){processElement(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&6/* COMPONENT */){processComponent(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&64/* TELEPORT */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else if(shapeFlag&128/* SUSPENSE */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else;}// set ref
if(ref!=null&&parentComponent){setRef(ref,n1&&n1.ref,parentSuspense,n2||n1,!n2);}};var processText=function processText(n1,n2,container,anchor){if(n1==null){hostInsert(n2.el=hostCreateText(n2.children),container,anchor);}else{var el=n2.el=n1.el;if(n2.children!==n1.children){hostSetText(el,n2.children);}}};var processCommentNode=function processCommentNode(n1,n2,container,anchor){if(n1==null){hostInsert(n2.el=hostCreateComment(n2.children||''),container,anchor);}else{// there's no support for dynamic comments
n2.el=n1.el;}};var mountStaticNode=function mountStaticNode(n2,container,anchor,isSVG){var _hostInsertStaticCont=hostInsertStaticContent(n2.children,container,anchor,isSVG);var _hostInsertStaticCont2=_slicedToArray(_hostInsertStaticCont,2);n2.el=_hostInsertStaticCont2[0];n2.anchor=_hostInsertStaticCont2[1];};var moveStaticNode=function moveStaticNode(_ref10,container,nextSibling){var el=_ref10.el,anchor=_ref10.anchor;var next;while(el&&el!==anchor){next=hostNextSibling(el);hostInsert(el,container,nextSibling);el=next;}hostInsert(anchor,container,nextSibling);};var removeStaticNode=function removeStaticNode(_ref11){var el=_ref11.el,anchor=_ref11.anchor;var next;while(el&&el!==anchor){next=hostNextSibling(el);hostRemove(el);el=next;}hostRemove(anchor);};var processElement=function processElement(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){isSVG=isSVG||n2.type==='svg';if(n1==null){mountElement(n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};var mountElement=function mountElement(vnode,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var el;var vnodeHook;var type=vnode.type,props=vnode.props,shapeFlag=vnode.shapeFlag,transition=vnode.transition,patchFlag=vnode.patchFlag,dirs=vnode.dirs;if(vnode.el&&hostCloneNode!==undefined&&patchFlag===-1/* HOISTED */){// If a vnode has non-null el, it means it's being reused.
// Only static vnodes can be reused, so its mounted DOM nodes should be
// exactly the same, and we can simply do a clone here.
// only do this in production since cloned trees cannot be HMR updated.
el=vnode.el=hostCloneNode(vnode.el);}else{el=vnode.el=hostCreateElement(vnode.type,isSVG,props&&props.is,props);// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
if(shapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(el,vnode.children);}else if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(vnode.children,el,null,parentComponent,parentSuspense,isSVG&&type!=='foreignObject',slotScopeIds,optimized);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'created');}// props
if(props){for(var key in props){if(key!=='value'&&!isReservedProp(key)){hostPatchProp(el,key,null,props[key],isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}/**
                             * Special case for setting value on DOM elements:
                             * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                             * - it needs to be forced (#1471)
                             * #2353 proposes adding another renderer option to configure this, but
                             * the properties affects are so finite it is worth special casing it
                             * here to reduce the complexity. (Special casing it also should not
                             * affect non-DOM renderers)
                             */if('value'in props){hostPatchProp(el,'value',null,props.value);}if(vnodeHook=props.onVnodeBeforeMount){invokeVNodeHook(vnodeHook,parentComponent,vnode);}}// scopeId
setScopeId(el,vnode,vnode.scopeId,slotScopeIds,parentComponent);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeMount');}// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
var needCallTransitionHooks=(!parentSuspense||parentSuspense&&!parentSuspense.pendingBranch)&&transition&&!transition.persisted;if(needCallTransitionHooks){transition.beforeEnter(el);}hostInsert(el,container,anchor);if((vnodeHook=props&&props.onVnodeMounted)||needCallTransitionHooks||dirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);needCallTransitionHooks&&transition.enter(el);dirs&&invokeDirectiveHook(vnode,null,parentComponent,'mounted');},parentSuspense);}};var setScopeId=function setScopeId(el,vnode,scopeId,slotScopeIds,parentComponent){if(scopeId){hostSetScopeId(el,scopeId);}if(slotScopeIds){for(var i=0;i<slotScopeIds.length;i++){hostSetScopeId(el,slotScopeIds[i]);}}if(parentComponent){var subTree=parentComponent.subTree;if(vnode===subTree){var parentVNode=parentComponent.vnode;setScopeId(el,parentVNode,parentVNode.scopeId,parentVNode.slotScopeIds,parentComponent.parent);}}};var mountChildren=function mountChildren(children,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var start=arguments.length>8&&arguments[8]!==undefined?arguments[8]:0;for(var i=start;i<children.length;i++){var child=children[i]=optimized?cloneIfMounted(children[i]):normalizeVNode(children[i]);patch(null,child,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};var patchElement=function patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var el=n2.el=n1.el;var patchFlag=n2.patchFlag,dynamicChildren=n2.dynamicChildren,dirs=n2.dirs;// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
patchFlag|=n1.patchFlag&16/* FULL_PROPS */;var oldProps=n1.props||EMPTY_OBJ;var newProps=n2.props||EMPTY_OBJ;var vnodeHook;if(vnodeHook=newProps.onVnodeBeforeUpdate){invokeVNodeHook(vnodeHook,parentComponent,n2,n1);}if(dirs){invokeDirectiveHook(n2,n1,parentComponent,'beforeUpdate');}var areChildrenSVG=isSVG&&n2.type!=='foreignObject';if(dynamicChildren){patchBlockChildren(n1.dynamicChildren,dynamicChildren,el,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds);}else if(!optimized){// full diff
patchChildren(n1,n2,el,null,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds,false);}if(patchFlag>0){// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(patchFlag&16/* FULL_PROPS */){// element props contain dynamic keys, full diff needed
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}else{// class
// this flag is matched when the element has dynamic class bindings.
if(patchFlag&2/* CLASS */){if(oldProps.class!==newProps.class){hostPatchProp(el,'class',null,newProps.class,isSVG);}}// style
// this flag is matched when the element has dynamic style bindings
if(patchFlag&4/* STYLE */){hostPatchProp(el,'style',oldProps.style,newProps.style,isSVG);}// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(patchFlag&8/* PROPS */){// if the flag is present then dynamicProps must be non-null
var propsToUpdate=n2.dynamicProps;for(var i=0;i<propsToUpdate.length;i++){var key=propsToUpdate[i];var prev=oldProps[key];var next=newProps[key];// #1471 force patch value
if(next!==prev||key==='value'){hostPatchProp(el,key,prev,next,isSVG,n1.children,parentComponent,parentSuspense,unmountChildren);}}}}// text
// This flag is matched when the element has only dynamic text children.
if(patchFlag&1/* TEXT */){if(n1.children!==n2.children){hostSetElementText(el,n2.children);}}}else if(!optimized&&dynamicChildren==null){// unoptimized, full diff
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}if((vnodeHook=newProps.onVnodeUpdated)||dirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,n2,n1);dirs&&invokeDirectiveHook(n2,n1,parentComponent,'updated');},parentSuspense);}};// The fast path for blocks.
var patchBlockChildren=function patchBlockChildren(oldChildren,newChildren,fallbackContainer,parentComponent,parentSuspense,isSVG,slotScopeIds){for(var i=0;i<newChildren.length;i++){var oldVNode=oldChildren[i];var newVNode=newChildren[i];// Determine the container (parent element) for the patch.
var container=// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
oldVNode.el&&(oldVNode.type===Fragment||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!isSameVNodeType(oldVNode,newVNode)||// - In the case of a component, it could contain anything.
oldVNode.shapeFlag&(6/* COMPONENT */|64/* TELEPORT */))?hostParentNode(oldVNode.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
fallbackContainer;patch(oldVNode,newVNode,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,true);}};var patchProps=function patchProps(el,vnode,oldProps,newProps,parentComponent,parentSuspense,isSVG){if(oldProps!==newProps){for(var key in newProps){// empty string is not valid prop
if(isReservedProp(key))continue;var next=newProps[key];var prev=oldProps[key];// defer patching value
if(next!==prev&&key!=='value'){hostPatchProp(el,key,prev,next,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}if(oldProps!==EMPTY_OBJ){for(var _key12 in oldProps){if(!isReservedProp(_key12)&&!(_key12 in newProps)){hostPatchProp(el,_key12,oldProps[_key12],null,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}}if('value'in newProps){hostPatchProp(el,'value',oldProps.value,newProps.value);}}};var processFragment=function processFragment(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var fragmentStartAnchor=n2.el=n1?n1.el:hostCreateText('');var fragmentEndAnchor=n2.anchor=n1?n1.anchor:hostCreateText('');var patchFlag=n2.patchFlag,dynamicChildren=n2.dynamicChildren,fragmentSlotScopeIds=n2.slotScopeIds;// check if this is a slot fragment with :slotted scope ids
if(fragmentSlotScopeIds){slotScopeIds=slotScopeIds?slotScopeIds.concat(fragmentSlotScopeIds):fragmentSlotScopeIds;}if(n1==null){hostInsert(fragmentStartAnchor,container,anchor);hostInsert(fragmentEndAnchor,container,anchor);// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
mountChildren(n2.children,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{if(patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */&&dynamicChildren&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
n1.dynamicChildren){// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
patchBlockChildren(n1.dynamicChildren,dynamicChildren,container,parentComponent,parentSuspense,isSVG,slotScopeIds);if(// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
n2.key!=null||parentComponent&&n2===parentComponent.subTree){traverseStaticChildren(n1,n2,true/* shallow */);}}else{// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
patchChildren(n1,n2,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}};var processComponent=function processComponent(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){n2.slotScopeIds=slotScopeIds;if(n1==null){if(n2.shapeFlag&512/* COMPONENT_KEPT_ALIVE */){parentComponent.ctx.activate(n2,container,anchor,isSVG,optimized);}else{mountComponent(n2,container,anchor,parentComponent,parentSuspense,isSVG,optimized);}}else{updateComponent(n1,n2,optimized);}};var mountComponent=function mountComponent(initialVNode,container,anchor,parentComponent,parentSuspense,isSVG,optimized){var instance=initialVNode.component=createComponentInstance(initialVNode,parentComponent,parentSuspense);// inject renderer internals for keepAlive
if(isKeepAlive(initialVNode)){instance.ctx.renderer=internals;}// resolve props and slots for setup context
{setupComponent(instance);}// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(instance.asyncDep){parentSuspense&&parentSuspense.registerDep(instance,setupRenderEffect);// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(!initialVNode.el){var placeholder=instance.subTree=createVNode(Comment);processCommentNode(null,placeholder,container,anchor);}return;}setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized);};var updateComponent=function updateComponent(n1,n2,optimized){var instance=n2.component=n1.component;if(shouldUpdateComponent(n1,n2,optimized)){if(instance.asyncDep&&!instance.asyncResolved){updateComponentPreRender(instance,n2,optimized);return;}else{// normal update
instance.next=n2;// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
invalidateJob(instance.update);// instance.update is the reactive effect.
instance.update();}}else{// no update needed. just copy over properties
n2.component=n1.component;n2.el=n1.el;instance.vnode=n2;}};var setupRenderEffect=function setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized){var componentUpdateFn=function componentUpdateFn(){if(!instance.isMounted){var vnodeHook;var _initialVNode=initialVNode,el=_initialVNode.el,props=_initialVNode.props;var bm=instance.bm,m=instance.m,parent=instance.parent;var isAsyncWrapperVNode=isAsyncWrapper(initialVNode);effect.allowRecurse=false;// beforeMount hook
if(bm){invokeArrayFns(bm);}// onVnodeBeforeMount
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeBeforeMount)){invokeVNodeHook(vnodeHook,parent,initialVNode);}effect.allowRecurse=true;if(el&&hydrateNode){// vnode has adopted host node - perform hydration instead of mount.
var hydrateSubTree=function hydrateSubTree(){instance.subTree=renderComponentRoot(instance);hydrateNode(el,instance.subTree,instance,parentSuspense,null);};if(isAsyncWrapperVNode){initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
function(){return!instance.isUnmounted&&hydrateSubTree();});}else{hydrateSubTree();}}else{var subTree=instance.subTree=renderComponentRoot(instance);patch(null,subTree,container,anchor,instance,parentSuspense,isSVG);initialVNode.el=subTree.el;}// mounted hook
if(m){queuePostRenderEffect(m,parentSuspense);}// onVnodeMounted
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeMounted)){var scopedInitialVNode=initialVNode;queuePostRenderEffect(function(){return invokeVNodeHook(vnodeHook,parent,scopedInitialVNode);},parentSuspense);}// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
if(initialVNode.shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){instance.a&&queuePostRenderEffect(instance.a,parentSuspense);}instance.isMounted=true;// #2458: deference mount-only object parameters to prevent memleaks
initialVNode=container=anchor=null;}else{// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
var next=instance.next,bu=instance.bu,u=instance.u,_parent=instance.parent,vnode=instance.vnode;var originNext=next;var _vnodeHook;// Disallow component effect recursion during pre-lifecycle hooks.
effect.allowRecurse=false;if(next){next.el=vnode.el;updateComponentPreRender(instance,next,optimized);}else{next=vnode;}// beforeUpdate hook
if(bu){invokeArrayFns(bu);}// onVnodeBeforeUpdate
if(_vnodeHook=next.props&&next.props.onVnodeBeforeUpdate){invokeVNodeHook(_vnodeHook,_parent,next,vnode);}effect.allowRecurse=true;var nextTree=renderComponentRoot(instance);var prevTree=instance.subTree;instance.subTree=nextTree;patch(prevTree,nextTree,// parent may have changed if it's in a teleport
hostParentNode(prevTree.el),// anchor may have changed if it's in a fragment
getNextHostNode(prevTree),instance,parentSuspense,isSVG);next.el=nextTree.el;if(originNext===null){// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
updateHOCHostEl(instance,nextTree.el);}// updated hook
if(u){queuePostRenderEffect(u,parentSuspense);}// onVnodeUpdated
if(_vnodeHook=next.props&&next.props.onVnodeUpdated){queuePostRenderEffect(function(){return invokeVNodeHook(_vnodeHook,_parent,next,vnode);},parentSuspense);}}};// create reactive effect for rendering
var effect=new ReactiveEffect(componentUpdateFn,function(){return queueJob(instance.update);},instance.scope// track it in component's effect scope
);var update=instance.update=effect.run.bind(effect);update.id=instance.uid;// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
effect.allowRecurse=update.allowRecurse=true;update();};var updateComponentPreRender=function updateComponentPreRender(instance,nextVNode,optimized){nextVNode.component=instance;var prevProps=instance.vnode.props;instance.vnode=nextVNode;instance.next=null;updateProps(instance,nextVNode.props,prevProps,optimized);updateSlots(instance,nextVNode.children,optimized);pauseTracking();// props update may have triggered pre-flush watchers.
// flush them before the render update.
flushPreFlushCbs(undefined,instance.update);resetTracking();};var patchChildren=function patchChildren(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds){var optimized=arguments.length>8&&arguments[8]!==undefined?arguments[8]:false;var c1=n1&&n1.children;var prevShapeFlag=n1?n1.shapeFlag:0;var c2=n2.children;var patchFlag=n2.patchFlag,shapeFlag=n2.shapeFlag;// fast path
if(patchFlag>0){if(patchFlag&128/* KEYED_FRAGMENT */){// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}else if(patchFlag&256/* UNKEYED_FRAGMENT */){// unkeyed
patchUnkeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}}// children has 3 possibilities: text, array or no children.
if(shapeFlag&8/* TEXT_CHILDREN */){// text children fast path
if(prevShapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(c1,parentComponent,parentSuspense);}if(c2!==c1){hostSetElementText(container,c2);}}else{if(prevShapeFlag&16/* ARRAY_CHILDREN */){// prev children was array
if(shapeFlag&16/* ARRAY_CHILDREN */){// two arrays, cannot assume anything, do full diff
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{// no new children, just unmount old
unmountChildren(c1,parentComponent,parentSuspense,true);}}else{// prev children was text OR null
// new children is array OR null
if(prevShapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(container,'');}// mount new if array
if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}}};var patchUnkeyedChildren=function patchUnkeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){c1=c1||EMPTY_ARR;c2=c2||EMPTY_ARR;var oldLength=c1.length;var newLength=c2.length;var commonLength=Math.min(oldLength,newLength);var i;for(i=0;i<commonLength;i++){var nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);patch(c1[i],nextChild,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}if(oldLength>newLength){// remove old
unmountChildren(c1,parentComponent,parentSuspense,true,false,commonLength);}else{// mount new
mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,commonLength);}};// can be all-keyed or mixed
var patchKeyedChildren=function patchKeyedChildren(c1,c2,container,parentAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized){var i=0;var l2=c2.length;var e1=c1.length-1;// prev ending index
var e2=l2-1;// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
while(i<=e1&&i<=e2){var n1=c1[i];var n2=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(isSameVNodeType(n1,n2)){patch(n1,n2,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}i++;}// 2. sync from end
// a (b c)
// d e (b c)
while(i<=e1&&i<=e2){var _n2=c1[e1];var _n3=c2[e2]=optimized?cloneIfMounted(c2[e2]):normalizeVNode(c2[e2]);if(isSameVNodeType(_n2,_n3)){patch(_n2,_n3,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}e1--;e2--;}// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(i>e1){if(i<=e2){var nextPos=e2+1;var anchor=nextPos<l2?c2[nextPos].el:parentAnchor;while(i<=e2){patch(null,c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]),container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);i++;}}}// 4. common sequence + unmount
// (a b) c
// (a b)
// i = 2, e1 = 2, e2 = 1
// a (b c)
// (b c)
// i = 0, e1 = 0, e2 = -1
else if(i>e2){while(i<=e1){unmount(c1[i],parentComponent,parentSuspense,true);i++;}}// 5. unknown sequence
// [i ... e1 + 1]: a b [c d e] f g
// [i ... e2 + 1]: a b [e d c h] f g
// i = 2, e1 = 4, e2 = 5
else{var s1=i;// prev starting index
var s2=i;// next starting index
// 5.1 build key:index map for newChildren
var keyToNewIndexMap=new Map();for(i=s2;i<=e2;i++){var nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(nextChild.key!=null){keyToNewIndexMap.set(nextChild.key,i);}}// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
var j;var patched=0;var toBePatched=e2-s2+1;var moved=false;// used to track whether any node has moved
var maxNewIndexSoFar=0;// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
var newIndexToOldIndexMap=new Array(toBePatched);for(i=0;i<toBePatched;i++){newIndexToOldIndexMap[i]=0;}for(i=s1;i<=e1;i++){var prevChild=c1[i];if(patched>=toBePatched){// all new children have been patched so this can only be a removal
unmount(prevChild,parentComponent,parentSuspense,true);continue;}var newIndex=void 0;if(prevChild.key!=null){newIndex=keyToNewIndexMap.get(prevChild.key);}else{// key-less node, try to locate a key-less node of the same type
for(j=s2;j<=e2;j++){if(newIndexToOldIndexMap[j-s2]===0&&isSameVNodeType(prevChild,c2[j])){newIndex=j;break;}}}if(newIndex===undefined){unmount(prevChild,parentComponent,parentSuspense,true);}else{newIndexToOldIndexMap[newIndex-s2]=i+1;if(newIndex>=maxNewIndexSoFar){maxNewIndexSoFar=newIndex;}else{moved=true;}patch(prevChild,c2[newIndex],container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);patched++;}}// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
var increasingNewIndexSequence=moved?getSequence(newIndexToOldIndexMap):EMPTY_ARR;j=increasingNewIndexSequence.length-1;// looping backwards so that we can use last patched node as anchor
for(i=toBePatched-1;i>=0;i--){var nextIndex=s2+i;var _nextChild=c2[nextIndex];var _anchor2=nextIndex+1<l2?c2[nextIndex+1].el:parentAnchor;if(newIndexToOldIndexMap[i]===0){// mount new
patch(null,_nextChild,container,_anchor2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(moved){// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
if(j<0||i!==increasingNewIndexSequence[j]){move(_nextChild,container,_anchor2,2/* REORDER */);}else{j--;}}}}};var move=function move(vnode,container,anchor,moveType){var parentSuspense=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var el=vnode.el,type=vnode.type,transition=vnode.transition,children=vnode.children,shapeFlag=vnode.shapeFlag;if(shapeFlag&6/* COMPONENT */){move(vnode.component.subTree,container,anchor,moveType);return;}if(shapeFlag&128/* SUSPENSE */){vnode.suspense.move(container,anchor,moveType);return;}if(shapeFlag&64/* TELEPORT */){type.move(vnode,container,anchor,internals);return;}if(type===Fragment){hostInsert(el,container,anchor);for(var i=0;i<children.length;i++){move(children[i],container,anchor,moveType);}hostInsert(vnode.anchor,container,anchor);return;}if(type===Static){moveStaticNode(vnode,container,anchor);return;}// single nodes
var needTransition=moveType!==2/* REORDER */&&shapeFlag&1/* ELEMENT */&&transition;if(needTransition){if(moveType===0/* ENTER */){transition.beforeEnter(el);hostInsert(el,container,anchor);queuePostRenderEffect(function(){return transition.enter(el);},parentSuspense);}else{var leave=transition.leave,delayLeave=transition.delayLeave,afterLeave=transition.afterLeave;var _remove=function _remove(){return hostInsert(el,container,anchor);};var performLeave=function performLeave(){leave(el,function(){_remove();afterLeave&&afterLeave();});};if(delayLeave){delayLeave(el,_remove,performLeave);}else{performLeave();}}}else{hostInsert(el,container,anchor);}};var unmount=function unmount(vnode,parentComponent,parentSuspense){var doRemove=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var optimized=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var type=vnode.type,props=vnode.props,ref=vnode.ref,children=vnode.children,dynamicChildren=vnode.dynamicChildren,shapeFlag=vnode.shapeFlag,patchFlag=vnode.patchFlag,dirs=vnode.dirs;// unset ref
if(ref!=null){setRef(ref,null,parentSuspense,vnode,true);}if(shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){parentComponent.ctx.deactivate(vnode);return;}var shouldInvokeDirs=shapeFlag&1/* ELEMENT */&&dirs;var shouldInvokeVnodeHook=!isAsyncWrapper(vnode);var vnodeHook;if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeBeforeUnmount)){invokeVNodeHook(vnodeHook,parentComponent,vnode);}if(shapeFlag&6/* COMPONENT */){unmountComponent(vnode.component,parentSuspense,doRemove);}else{if(shapeFlag&128/* SUSPENSE */){vnode.suspense.unmount(parentSuspense,doRemove);return;}if(shouldInvokeDirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeUnmount');}if(shapeFlag&64/* TELEPORT */){vnode.type.remove(vnode,parentComponent,parentSuspense,optimized,internals,doRemove);}else if(dynamicChildren&&(type!==Fragment||patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */)){// fast path for block nodes: only need to unmount dynamic children.
unmountChildren(dynamicChildren,parentComponent,parentSuspense,false,true);}else if(type===Fragment&&patchFlag&(128/* KEYED_FRAGMENT */|256/* UNKEYED_FRAGMENT */)||!optimized&&shapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(children,parentComponent,parentSuspense);}if(doRemove){remove(vnode);}}if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeUnmounted)||shouldInvokeDirs){queuePostRenderEffect(function(){vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);shouldInvokeDirs&&invokeDirectiveHook(vnode,null,parentComponent,'unmounted');},parentSuspense);}};var remove=function remove(vnode){var type=vnode.type,el=vnode.el,anchor=vnode.anchor,transition=vnode.transition;if(type===Fragment){removeFragment(el,anchor);return;}if(type===Static){removeStaticNode(vnode);return;}var performRemove=function performRemove(){hostRemove(el);if(transition&&!transition.persisted&&transition.afterLeave){transition.afterLeave();}};if(vnode.shapeFlag&1/* ELEMENT */&&transition&&!transition.persisted){var leave=transition.leave,delayLeave=transition.delayLeave;var performLeave=function performLeave(){return leave(el,performRemove);};if(delayLeave){delayLeave(vnode.el,performRemove,performLeave);}else{performLeave();}}else{performRemove();}};var removeFragment=function removeFragment(cur,end){// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
var next;while(cur!==end){next=hostNextSibling(cur);hostRemove(cur);cur=next;}hostRemove(end);};var unmountComponent=function unmountComponent(instance,parentSuspense,doRemove){var bum=instance.bum,scope=instance.scope,update=instance.update,subTree=instance.subTree,um=instance.um;// beforeUnmount hook
if(bum){invokeArrayFns(bum);}// stop effects in component scope
scope.stop();// update may be null if a component is unmounted before its async
// setup has resolved.
if(update){// so that scheduler will no longer invoke it
update.active=false;unmount(subTree,instance,parentSuspense,doRemove);}// unmounted hook
if(um){queuePostRenderEffect(um,parentSuspense);}queuePostRenderEffect(function(){instance.isUnmounted=true;},parentSuspense);// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
if(parentSuspense&&parentSuspense.pendingBranch&&!parentSuspense.isUnmounted&&instance.asyncDep&&!instance.asyncResolved&&instance.suspenseId===parentSuspense.pendingId){parentSuspense.deps--;if(parentSuspense.deps===0){parentSuspense.resolve();}}};var unmountChildren=function unmountChildren(children,parentComponent,parentSuspense){var doRemove=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var optimized=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var start=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;for(var i=start;i<children.length;i++){unmount(children[i],parentComponent,parentSuspense,doRemove,optimized);}};var getNextHostNode=function getNextHostNode(vnode){if(vnode.shapeFlag&6/* COMPONENT */){return getNextHostNode(vnode.component.subTree);}if(vnode.shapeFlag&128/* SUSPENSE */){return vnode.suspense.next();}return hostNextSibling(vnode.anchor||vnode.el);};var render=function render(vnode,container,isSVG){if(vnode==null){if(container._vnode){unmount(container._vnode,null,null,true);}}else{patch(container._vnode||null,vnode,container,null,null,null,isSVG);}flushPostFlushCbs();container._vnode=vnode;};var internals={p:patch,um:unmount,m:move,r:remove,mt:mountComponent,mc:mountChildren,pc:patchChildren,pbc:patchBlockChildren,n:getNextHostNode,o:options};var hydrate;var hydrateNode;if(createHydrationFns){var _createHydrationFns=createHydrationFns(internals);var _createHydrationFns2=_slicedToArray(_createHydrationFns,2);hydrate=_createHydrationFns2[0];hydrateNode=_createHydrationFns2[1];}return{render:render,hydrate:hydrate,createApp:createAppAPI(render,hydrate)};}function setRef(rawRef,oldRawRef,parentSuspense,vnode){var isUnmount=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;if(isArray(rawRef)){rawRef.forEach(function(r,i){return setRef(r,oldRawRef&&(isArray(oldRawRef)?oldRawRef[i]:oldRawRef),parentSuspense,vnode,isUnmount);});return;}if(isAsyncWrapper(vnode)&&!isUnmount){// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;}var refValue=vnode.shapeFlag&4/* STATEFUL_COMPONENT */?getExposeProxy(vnode.component)||vnode.component.proxy:vnode.el;var value=isUnmount?null:refValue;var owner=rawRef.i,ref=rawRef.r;var oldRef=oldRawRef&&oldRawRef.r;var refs=owner.refs===EMPTY_OBJ?owner.refs={}:owner.refs;var setupState=owner.setupState;// dynamic ref changed. unset old ref
if(oldRef!=null&&oldRef!==ref){if(isString(oldRef)){refs[oldRef]=null;if(hasOwn(setupState,oldRef)){setupState[oldRef]=null;}}else if(isRef(oldRef)){oldRef.value=null;}}if(isString(ref)){var doSet=function doSet(){{refs[ref]=value;}if(hasOwn(setupState,ref)){setupState[ref]=value;}};// #1789: for non-null values, set them after render
// null values means this is unmount and it should not overwrite another
// ref with the same key
if(value){doSet.id=-1;queuePostRenderEffect(doSet,parentSuspense);}else{doSet();}}else if(isRef(ref)){var _doSet=function _doSet(){ref.value=value;};if(value){_doSet.id=-1;queuePostRenderEffect(_doSet,parentSuspense);}else{_doSet();}}else if(isFunction$1(ref)){callWithErrorHandling(ref,owner,12/* FUNCTION_REF */,[value,refs]);}else;}function invokeVNodeHook(hook,instance,vnode){var prevVNode=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;callWithAsyncErrorHandling(hook,instance,7/* VNODE_HOOK */,[vnode,prevVNode]);}/**
             * #1156
             * When a component is HMR-enabled, we need to make sure that all static nodes
             * inside a block also inherit the DOM element from the previous tree so that
             * HMR updates (which are full updates) can retrieve the element for patching.
             *
             * #2080
             * Inside keyed `template` fragment static children, if a fragment is moved,
             * the children will always moved so that need inherit el form previous nodes
             * to ensure correct moved position.
             */function traverseStaticChildren(n1,n2){var shallow=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var ch1=n1.children;var ch2=n2.children;if(isArray(ch1)&&isArray(ch2)){for(var i=0;i<ch1.length;i++){// this is only called in the optimized path so array children are
// guaranteed to be vnodes
var c1=ch1[i];var c2=ch2[i];if(c2.shapeFlag&1/* ELEMENT */&&!c2.dynamicChildren){if(c2.patchFlag<=0||c2.patchFlag===32/* HYDRATE_EVENTS */){c2=ch2[i]=cloneIfMounted(ch2[i]);c2.el=c1.el;}if(!shallow)traverseStaticChildren(c1,c2);}}}}// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr){var p=arr.slice();var result=[0];var i,j,u,v,c;var len=arr.length;for(i=0;i<len;i++){var arrI=arr[i];if(arrI!==0){j=result[result.length-1];if(arr[j]<arrI){p[i]=j;result.push(i);continue;}u=0;v=result.length-1;while(u<v){c=u+v>>1;if(arr[result[c]]<arrI){u=c+1;}else{v=c;}}if(arrI<arr[result[u]]){if(u>0){p[i]=result[u-1];}result[u]=i;}}}u=result.length;v=result[u-1];while(u-->0){result[u]=v;v=p[v];}return result;}var isTeleport=function isTeleport(type){return type.__isTeleport;};var NULL_DYNAMIC_COMPONENT=Symbol();var Fragment=exports('F',Symbol(undefined));var Text=Symbol(undefined);var Comment=Symbol(undefined);var Static=Symbol(undefined);// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
var blockStack=[];var currentBlock=null;/**
             * Open a block.
             * This must be called before `createBlock`. It cannot be part of `createBlock`
             * because the children of the block are evaluated before `createBlock` itself
             * is called. The generated code typically looks like this:
             *
             * ```js
             * function render() {
             *   return (openBlock(),createBlock('div', null, [...]))
             * }
             * ```
             * disableTracking is true when creating a v-for fragment block, since a v-for
             * fragment always diffs its children.
             *
             * @private
             */function openBlock(){var disableTracking=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;blockStack.push(currentBlock=disableTracking?null:[]);}function closeBlock(){blockStack.pop();currentBlock=blockStack[blockStack.length-1]||null;}// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
var isBlockTreeEnabled=1;/**
             * Block tracking sometimes needs to be disabled, for example during the
             * creation of a tree that needs to be cached by v-once. The compiler generates
             * code like this:
             *
             * ``` js
             * _cache[1] || (
             *   setBlockTracking(-1),
             *   _cache[1] = createVNode(...),
             *   setBlockTracking(1),
             *   _cache[1]
             * )
             * ```
             *
             * @private
             */function setBlockTracking(value){isBlockTreeEnabled+=value;}function setupBlock(vnode){// save current block children on the block vnode
vnode.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null;// close block
closeBlock();// a block is always going to be patched, so track it as a child of its
// parent block
if(isBlockTreeEnabled>0&&currentBlock){currentBlock.push(vnode);}return vnode;}/**
             * @private
             */function createElementBlock(type,props,children,patchFlag,dynamicProps,shapeFlag){return setupBlock(createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,true/* isBlock */));}/**
             * Create a block root vnode. Takes the same exact arguments as `createVNode`.
             * A block root keeps track of dynamic nodes within the block in the
             * `dynamicChildren` array.
             *
             * @private
             */function createBlock(type,props,children,patchFlag,dynamicProps){return setupBlock(createVNode(type,props,children,patchFlag,dynamicProps,true/* isBlock: prevent a block from tracking itself */));}function isVNode(value){return value?value.__v_isVNode===true:false;}function isSameVNodeType(n1,n2){return n1.type===n2.type&&n1.key===n2.key;}var InternalObjectKey="__vInternal";var normalizeKey=function normalizeKey(_ref12){var key=_ref12.key;return key!=null?key:null;};var normalizeRef=function normalizeRef(_ref13){var ref=_ref13.ref;return ref!=null?isString(ref)||isRef(ref)||isFunction$1(ref)?{i:currentRenderingInstance,r:ref}:ref:null;};function createBaseVNode(type){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var patchFlag=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var dynamicProps=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var shapeFlag=arguments.length>5&&arguments[5]!==undefined?arguments[5]:type===Fragment?0:1;var isBlockNode=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;var needFullChildrenNormalization=arguments.length>7&&arguments[7]!==undefined?arguments[7]:false;var vnode={__v_isVNode:true,__v_skip:true,type:type,props:props,key:props&&normalizeKey(props),ref:props&&normalizeRef(props),scopeId:currentScopeId,slotScopeIds:null,children:children,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:shapeFlag,patchFlag:patchFlag,dynamicProps:dynamicProps,dynamicChildren:null,appContext:null};if(needFullChildrenNormalization){normalizeChildren(vnode,children);// normalize suspense children
if(shapeFlag&128/* SUSPENSE */){type.normalize(vnode);}}else if(children){// compiled element vnode - if children is passed, only possible types are
// string or Array.
vnode.shapeFlag|=isString(children)?8/* TEXT_CHILDREN */:16/* ARRAY_CHILDREN */;}// track vnode for block tree
if(isBlockTreeEnabled>0&&// avoid a block node from tracking itself
!isBlockNode&&// has current parent block
currentBlock&&(vnode.patchFlag>0||shapeFlag&6/* COMPONENT */)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
vnode.patchFlag!==32/* HYDRATE_EVENTS */){currentBlock.push(vnode);}return vnode;}var createVNode=exports('b',_createVNode);function _createVNode(type){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var patchFlag=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var dynamicProps=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var isBlockNode=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;if(!type||type===NULL_DYNAMIC_COMPONENT){type=Comment;}if(isVNode(type)){// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
var cloned=cloneVNode(type,props,true/* mergeRef: true */);if(children){normalizeChildren(cloned,children);}return cloned;}// class component normalization.
if(isClassComponent(type)){type=type.__vccOpts;}// class & style normalization.
if(props){// for reactive or proxy objects, we need to clone it to enable mutation.
props=guardReactiveProps(props);var _props2=props,klass=_props2.class,style=_props2.style;if(klass&&!isString(klass)){props.class=normalizeClass(klass);}if(isObject$2(style)){// reactive state objects need to be cloned since they are likely to be
// mutated
if(isProxy(style)&&!isArray(style)){style=extend({},style);}props.style=normalizeStyle(style);}}// encode the vnode type information into a bitmap
var shapeFlag=isString(type)?1/* ELEMENT */:isSuspense(type)?128/* SUSPENSE */:isTeleport(type)?64/* TELEPORT */:isObject$2(type)?4/* STATEFUL_COMPONENT */:isFunction$1(type)?2/* FUNCTIONAL_COMPONENT */:0;return createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,isBlockNode,true);}function guardReactiveProps(props){if(!props)return null;return isProxy(props)||InternalObjectKey in props?extend({},props):props;}function cloneVNode(vnode,extraProps){var mergeRef=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
var props=vnode.props,ref=vnode.ref,patchFlag=vnode.patchFlag,children=vnode.children;var mergedProps=extraProps?mergeProps(props||{},extraProps):props;var cloned={__v_isVNode:true,__v_skip:true,type:vnode.type,props:mergedProps,key:mergedProps&&normalizeKey(mergedProps),ref:extraProps&&extraProps.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
mergeRef&&ref?isArray(ref)?ref.concat(normalizeRef(extraProps)):[ref,normalizeRef(extraProps)]:normalizeRef(extraProps):ref,scopeId:vnode.scopeId,slotScopeIds:vnode.slotScopeIds,children:children,target:vnode.target,targetAnchor:vnode.targetAnchor,staticCount:vnode.staticCount,shapeFlag:vnode.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: perserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:extraProps&&vnode.type!==Fragment?patchFlag===-1// hoisted node
?16/* FULL_PROPS */:patchFlag|16/* FULL_PROPS */:patchFlag,dynamicProps:vnode.dynamicProps,dynamicChildren:vnode.dynamicChildren,appContext:vnode.appContext,dirs:vnode.dirs,transition:vnode.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:vnode.component,suspense:vnode.suspense,ssContent:vnode.ssContent&&cloneVNode(vnode.ssContent),ssFallback:vnode.ssFallback&&cloneVNode(vnode.ssFallback),el:vnode.el,anchor:vnode.anchor};return cloned;}/**
             * @private
             */function createTextVNode(){var text=arguments.length>0&&arguments[0]!==undefined?arguments[0]:' ';var flag=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return createVNode(Text,null,text,flag);}function normalizeVNode(child){if(child==null||typeof child==='boolean'){// empty placeholder
return createVNode(Comment);}else if(isArray(child)){// fragment
return createVNode(Fragment,null,// #3666, avoid reference pollution when reusing vnode
child.slice());}else if(_typeof(child)==='object'){// already vnode, this should be the most common since compiled templates
// always produce all-vnode children arrays
return cloneIfMounted(child);}else{// strings and numbers
return createVNode(Text,null,String(child));}}// optimized normalization for template-compiled render fns
function cloneIfMounted(child){return child.el===null||child.memo?child:cloneVNode(child);}function normalizeChildren(vnode,children){var type=0;var shapeFlag=vnode.shapeFlag;if(children==null){children=null;}else if(isArray(children)){type=16/* ARRAY_CHILDREN */;}else if(_typeof(children)==='object'){if(shapeFlag&(1/* ELEMENT */|64/* TELEPORT */)){// Normalize slot to plain children for plain element and Teleport
var slot=children.default;if(slot){// _c marker is added by withCtx() indicating this is a compiled slot
slot._c&&(slot._d=false);normalizeChildren(vnode,slot());slot._c&&(slot._d=true);}return;}else{type=32/* SLOTS_CHILDREN */;var slotFlag=children._;if(!slotFlag&&!(InternalObjectKey in children)){children._ctx=currentRenderingInstance;}else if(slotFlag===3/* FORWARDED */&&currentRenderingInstance){// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
if(currentRenderingInstance.slots._===1/* STABLE */){children._=1/* STABLE */;}else{children._=2/* DYNAMIC */;vnode.patchFlag|=1024/* DYNAMIC_SLOTS */;}}}}else if(isFunction$1(children)){children={default:children,_ctx:currentRenderingInstance};type=32/* SLOTS_CHILDREN */;}else{children=String(children);// force teleport children to array so it can be moved around
if(shapeFlag&64/* TELEPORT */){type=16/* ARRAY_CHILDREN */;children=[createTextVNode(children)];}else{type=8/* TEXT_CHILDREN */;}}vnode.children=children;vnode.shapeFlag|=type;}function mergeProps(){var ret={};for(var i=0;i<arguments.length;i++){var toMerge=i<0||arguments.length<=i?undefined:arguments[i];for(var key in toMerge){if(key==='class'){if(ret.class!==toMerge.class){ret.class=normalizeClass([ret.class,toMerge.class]);}}else if(key==='style'){ret.style=normalizeStyle([ret.style,toMerge.style]);}else if(isOn(key)){var existing=ret[key];var incoming=toMerge[key];if(existing!==incoming){ret[key]=existing?[].concat(existing,incoming):incoming;}}else if(key!==''){ret[key]=toMerge[key];}}}return ret;}/**
             * Compiler runtime helper for rendering `<slot/>`
             * @private
             */function renderSlot(slots,name){var props=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback=arguments.length>3?arguments[3]:undefined;var noSlotted=arguments.length>4?arguments[4]:undefined;if(currentRenderingInstance.isCE){return createVNode('slot',name==='default'?null:{name:name},fallback&&fallback());}var slot=slots[name];// a compiled slot disables block tracking by default to avoid manual
// invocation interfering with template-based block tracking, but in
// `renderSlot` we can be sure that it's template-based so we can force
// enable it.
if(slot&&slot._c){slot._d=false;}openBlock();var validSlotContent=slot&&ensureValidVNode(slot(props));var rendered=createBlock(Fragment,{key:props.key||"_".concat(name)},validSlotContent||(fallback?fallback():[]),validSlotContent&&slots._===1/* STABLE */?64/* STABLE_FRAGMENT */:-2/* BAIL */);if(!noSlotted&&rendered.scopeId){rendered.slotScopeIds=[rendered.scopeId+'-s'];}if(slot&&slot._c){slot._d=true;}return rendered;}function ensureValidVNode(vnodes){return vnodes.some(function(child){if(!isVNode(child))return true;if(child.type===Comment)return false;if(child.type===Fragment&&!ensureValidVNode(child.children))return false;return true;})?vnodes:null;}/**
             * #2437 In Vue 3, functional components do not have a public instance proxy but
             * they exist in the internal parent chain. For code that relies on traversing
             * public $parent chains, skip functional ones and go to the parent instead.
             */var getPublicInstance=function getPublicInstance(i){if(!i)return null;if(isStatefulComponent(i))return getExposeProxy(i)||i.proxy;return getPublicInstance(i.parent);};var publicPropertiesMap=extend(Object.create(null),{$:function $(i){return i;},$el:function $el(i){return i.vnode.el;},$data:function $data(i){return i.data;},$props:function $props(i){return i.props;},$attrs:function $attrs(i){return i.attrs;},$slots:function $slots(i){return i.slots;},$refs:function $refs(i){return i.refs;},$parent:function $parent(i){return getPublicInstance(i.parent);},$root:function $root(i){return getPublicInstance(i.root);},$emit:function $emit(i){return i.emit;},$options:function $options(i){return resolveMergedOptions(i);},$forceUpdate:function $forceUpdate(i){return function(){return queueJob(i.update);};},$nextTick:function $nextTick(i){return nextTick.bind(i.proxy);},$watch:function $watch(i){return instanceWatch.bind(i);}});var PublicInstanceProxyHandlers={get:function get(_ref14,key){var instance=_ref14._;var ctx=instance.ctx,setupState=instance.setupState,data=instance.data,props=instance.props,accessCache=instance.accessCache,type=instance.type,appContext=instance.appContext;// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
var normalizedProps;if(key[0]!=='$'){var n=accessCache[key];if(n!==undefined){switch(n){case 0/* SETUP */:return setupState[key];case 1/* DATA */:return data[key];case 3/* CONTEXT */:return ctx[key];case 2/* PROPS */:return props[key];// default: just fallthrough
}}else if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){accessCache[key]=0/* SETUP */;return setupState[key];}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){accessCache[key]=1/* DATA */;return data[key];}else if(// only cache other properties when instance has declared (thus stable)
// props
(normalizedProps=instance.propsOptions[0])&&hasOwn(normalizedProps,key)){accessCache[key]=2/* PROPS */;return props[key];}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){accessCache[key]=3/* CONTEXT */;return ctx[key];}else if(shouldCacheAccess){accessCache[key]=4/* OTHER */;}}var publicGetter=publicPropertiesMap[key];var cssModule,globalProperties;// public $xxx properties
if(publicGetter){if(key==='$attrs'){track(instance,"get"/* GET */,key);}return publicGetter(instance);}else if(// css module (injected by vue-loader)
(cssModule=type.__cssModules)&&(cssModule=cssModule[key])){return cssModule;}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){// user may set custom properties to `this` that start with `$`
accessCache[key]=3/* CONTEXT */;return ctx[key];}else if(globalProperties=appContext.config.globalProperties,hasOwn(globalProperties,key)){{return globalProperties[key];}}else;},set:function set(_ref15,key,value){var instance=_ref15._;var data=instance.data,setupState=instance.setupState,ctx=instance.ctx;if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){setupState[key]=value;}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){data[key]=value;}else if(hasOwn(instance.props,key)){return false;}if(key[0]==='$'&&key.slice(1)in instance){return false;}else{{ctx[key]=value;}}return true;},has:function has(_ref16,key){var _ref16$_=_ref16._,data=_ref16$_.data,setupState=_ref16$_.setupState,accessCache=_ref16$_.accessCache,ctx=_ref16$_.ctx,appContext=_ref16$_.appContext,propsOptions=_ref16$_.propsOptions;var normalizedProps;return accessCache[key]!==undefined||data!==EMPTY_OBJ&&hasOwn(data,key)||setupState!==EMPTY_OBJ&&hasOwn(setupState,key)||(normalizedProps=propsOptions[0])&&hasOwn(normalizedProps,key)||hasOwn(ctx,key)||hasOwn(publicPropertiesMap,key)||hasOwn(appContext.config.globalProperties,key);}};var emptyAppContext=createAppContext();var uid$1=0;function createComponentInstance(vnode,parent,suspense){var type=vnode.type;// inherit parent app context - or - if root, adopt from root vnode
var appContext=(parent?parent.appContext:vnode.appContext)||emptyAppContext;var instance={uid:uid$1++,vnode:vnode,type:type,parent:parent,appContext:appContext,root:null,next:null,subTree:null,update:null,scope:new EffectScope(true/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:parent?parent.provides:Object.create(appContext.provides),accessCache:null,renderCache:[],// local resovled assets
components:null,directives:null,// resolved props and emits options
propsOptions:normalizePropsOptions(type,appContext),emitsOptions:normalizeEmitsOptions(type,appContext),// emit
emit:null,emitted:null,// props default value
propsDefaults:EMPTY_OBJ,// inheritAttrs
inheritAttrs:type.inheritAttrs,// state
ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,// suspense related
suspense:suspense,suspenseId:suspense?suspense.pendingId:0,asyncDep:null,asyncResolved:false,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:false,isUnmounted:false,isDeactivated:false,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};{instance.ctx={_:instance};}instance.root=parent?parent.root:instance;instance.emit=emit$1.bind(null,instance);// apply custom element special handling
if(vnode.ce){vnode.ce(instance);}return instance;}var currentInstance=null;var getCurrentInstance=exports('g',function(){return currentInstance||currentRenderingInstance;});var setCurrentInstance=function setCurrentInstance(instance){currentInstance=instance;instance.scope.on();};var unsetCurrentInstance=function unsetCurrentInstance(){currentInstance&&currentInstance.scope.off();currentInstance=null;};function isStatefulComponent(instance){return instance.vnode.shapeFlag&4/* STATEFUL_COMPONENT */;}var isInSSRComponentSetup=false;function setupComponent(instance){var isSSR=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;isInSSRComponentSetup=isSSR;var _instance$vnode=instance.vnode,props=_instance$vnode.props,children=_instance$vnode.children;var isStateful=isStatefulComponent(instance);initProps(instance,props,isStateful,isSSR);initSlots(instance,children);var setupResult=isStateful?setupStatefulComponent(instance,isSSR):undefined;isInSSRComponentSetup=false;return setupResult;}function setupStatefulComponent(instance,isSSR){var Component=instance.type;// 0. create render proxy property access cache
instance.accessCache=Object.create(null);// 1. create public instance / render proxy
// also mark it raw so it's never observed
instance.proxy=markRaw(new Proxy(instance.ctx,PublicInstanceProxyHandlers));// 2. call setup()
var setup=Component.setup;if(setup){var setupContext=instance.setupContext=setup.length>1?createSetupContext(instance):null;setCurrentInstance(instance);pauseTracking();var setupResult=callWithErrorHandling(setup,instance,0/* SETUP_FUNCTION */,[instance.props,setupContext]);resetTracking();unsetCurrentInstance();if(isPromise$1(setupResult)){setupResult.then(unsetCurrentInstance,unsetCurrentInstance);if(isSSR){// return the promise so server-renderer can wait on it
return setupResult.then(function(resolvedResult){handleSetupResult(instance,resolvedResult,isSSR);}).catch(function(e){handleError(e,instance,0/* SETUP_FUNCTION */);});}else{// async setup returned Promise.
// bail here and wait for re-entry.
instance.asyncDep=setupResult;}}else{handleSetupResult(instance,setupResult,isSSR);}}else{finishComponentSetup(instance,isSSR);}}function handleSetupResult(instance,setupResult,isSSR){if(isFunction$1(setupResult)){// setup returned an inline render function
if(instance.type.__ssrInlineRender){// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
instance.ssrRender=setupResult;}else{instance.render=setupResult;}}else if(isObject$2(setupResult)){instance.setupState=proxyRefs(setupResult);}else;finishComponentSetup(instance,isSSR);}var compile;function finishComponentSetup(instance,isSSR,skipOptions){var Component=instance.type;// template / render function normalization
// could be already set when returned from setup()
if(!instance.render){// only do on-the-fly compile if not in SSR - SSR on-the-fly compliation
// is done by server-renderer
if(!isSSR&&compile&&!Component.render){var template=Component.template;if(template){var _instance$appContext$=instance.appContext.config,isCustomElement=_instance$appContext$.isCustomElement,compilerOptions=_instance$appContext$.compilerOptions;var delimiters=Component.delimiters,componentCompilerOptions=Component.compilerOptions;var finalCompilerOptions=extend(extend({isCustomElement:isCustomElement,delimiters:delimiters},compilerOptions),componentCompilerOptions);Component.render=compile(template,finalCompilerOptions);}}instance.render=Component.render||NOOP;}// support for 2.x options
{setCurrentInstance(instance);pauseTracking();applyOptions(instance);resetTracking();unsetCurrentInstance();}}function createAttrsProxy(instance){return new Proxy(instance.attrs,{get:function get(target,key){track(instance,"get"/* GET */,'$attrs');return target[key];}});}function createSetupContext(instance){var expose=function expose(exposed){instance.exposed=exposed||{};};var attrs;{return{get attrs(){return attrs||(attrs=createAttrsProxy(instance));},slots:instance.slots,emit:instance.emit,expose:expose};}}function getExposeProxy(instance){if(instance.exposed){return instance.exposeProxy||(instance.exposeProxy=new Proxy(proxyRefs(markRaw(instance.exposed)),{get:function get(target,key){if(key in target){return target[key];}else if(key in publicPropertiesMap){return publicPropertiesMap[key](instance);}}}));}}function isClassComponent(value){return isFunction$1(value)&&'__vccOpts'in value;}function callWithErrorHandling(fn,instance,type,args){var res;try{res=args?fn.apply(void 0,_toConsumableArray(args)):fn();}catch(err){handleError(err,instance,type);}return res;}function callWithAsyncErrorHandling(fn,instance,type,args){if(isFunction$1(fn)){var res=callWithErrorHandling(fn,instance,type,args);if(res&&isPromise$1(res)){res.catch(function(err){handleError(err,instance,type);});}return res;}var values=[];for(var i=0;i<fn.length;i++){values.push(callWithAsyncErrorHandling(fn[i],instance,type,args));}return values;}function handleError(err,instance,type){var throwInDev=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var contextVNode=instance?instance.vnode:null;if(instance){var cur=instance.parent;// the exposed instance is the render proxy to keep it consistent with 2.x
var exposedInstance=instance.proxy;// in production the hook receives only the error code
var errorInfo=type;while(cur){var errorCapturedHooks=cur.ec;if(errorCapturedHooks){for(var i=0;i<errorCapturedHooks.length;i++){if(errorCapturedHooks[i](err,exposedInstance,errorInfo)===false){return;}}}cur=cur.parent;}// app-level handling
var appErrorHandler=instance.appContext.config.errorHandler;if(appErrorHandler){callWithErrorHandling(appErrorHandler,null,10/* APP_ERROR_HANDLER */,[err,exposedInstance,errorInfo]);return;}}logError(err,type,contextVNode,throwInDev);}function logError(err,type,contextVNode){var throwInDev=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;{// recover in prod to reduce the impact on end-user
console.error(err);}}var isFlushing=false;var isFlushPending=false;var queue=[];var flushIndex=0;var pendingPreFlushCbs=[];var activePreFlushCbs=null;var preFlushIndex=0;var pendingPostFlushCbs=[];var activePostFlushCbs=null;var postFlushIndex=0;var resolvedPromise=Promise.resolve();var currentFlushPromise=null;var currentPreFlushParentJob=null;function nextTick(fn){var p=currentFlushPromise||resolvedPromise;return fn?p.then(this?fn.bind(this):fn):p;}// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id){// the start index should be `flushIndex + 1`
var start=flushIndex+1;var end=queue.length;while(start<end){var middle=start+end>>>1;var middleJobId=getId(queue[middle]);middleJobId<id?start=middle+1:end=middle;}return start;}function queueJob(job){// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
if((!queue.length||!queue.includes(job,isFlushing&&job.allowRecurse?flushIndex+1:flushIndex))&&job!==currentPreFlushParentJob){if(job.id==null){queue.push(job);}else{queue.splice(findInsertionIndex(job.id),0,job);}queueFlush();}}function queueFlush(){if(!isFlushing&&!isFlushPending){isFlushPending=true;currentFlushPromise=resolvedPromise.then(flushJobs);}}function invalidateJob(job){var i=queue.indexOf(job);if(i>flushIndex){queue.splice(i,1);}}function queueCb(cb,activeQueue,pendingQueue,index){if(!isArray(cb)){if(!activeQueue||!activeQueue.includes(cb,cb.allowRecurse?index+1:index)){pendingQueue.push(cb);}}else{// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
pendingQueue.push.apply(pendingQueue,_toConsumableArray(cb));}queueFlush();}function queuePreFlushCb(cb){queueCb(cb,activePreFlushCbs,pendingPreFlushCbs,preFlushIndex);}function queuePostFlushCb(cb){queueCb(cb,activePostFlushCbs,pendingPostFlushCbs,postFlushIndex);}function flushPreFlushCbs(seen){var parentJob=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(pendingPreFlushCbs.length){currentPreFlushParentJob=parentJob;activePreFlushCbs=_toConsumableArray(new Set(pendingPreFlushCbs));pendingPreFlushCbs.length=0;for(preFlushIndex=0;preFlushIndex<activePreFlushCbs.length;preFlushIndex++){activePreFlushCbs[preFlushIndex]();}activePreFlushCbs=null;preFlushIndex=0;currentPreFlushParentJob=null;// recursively flush until it drains
flushPreFlushCbs(seen,parentJob);}}function flushPostFlushCbs(seen){if(pendingPostFlushCbs.length){var deduped=_toConsumableArray(new Set(pendingPostFlushCbs));pendingPostFlushCbs.length=0;// #1947 already has active queue, nested flushPostFlushCbs call
if(activePostFlushCbs){var _activePostFlushCbs;(_activePostFlushCbs=activePostFlushCbs).push.apply(_activePostFlushCbs,_toConsumableArray(deduped));return;}activePostFlushCbs=deduped;activePostFlushCbs.sort(function(a,b){return getId(a)-getId(b);});for(postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){activePostFlushCbs[postFlushIndex]();}activePostFlushCbs=null;postFlushIndex=0;}}var getId=function getId(job){return job.id==null?Infinity:job.id;};function flushJobs(seen){isFlushPending=false;isFlushing=true;flushPreFlushCbs(seen);// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
queue.sort(function(a,b){return getId(a)-getId(b);});// conditional usage of checkRecursiveUpdate must be determined out of
// try ... catch block since Rollup by default de-optimizes treeshaking
// inside try-catch. This can leave all warning code unshaked. Although
// they would get eventually shaken by a minifier like terser, some minifiers
// would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
var check=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){var job=queue[flushIndex];if(job&&job.active!==false){if("production"!=='production'&&check(job));// console.log(`running:`, job.id)
callWithErrorHandling(job,null,14/* SCHEDULER */);}}}finally{flushIndex=0;queue.length=0;flushPostFlushCbs();isFlushing=false;currentFlushPromise=null;// some postFlushCb queued jobs!
// keep flushing until it drains.
if(queue.length||pendingPreFlushCbs.length||pendingPostFlushCbs.length){flushJobs(seen);}}}// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE={};// implementation
function watch(source,cb,options){return doWatch(source,cb,options);}function doWatch(source,cb){var _ref17=arguments.length>2&&arguments[2]!==undefined?arguments[2]:EMPTY_OBJ,immediate=_ref17.immediate,deep=_ref17.deep,flush=_ref17.flush,onTrack=_ref17.onTrack,onTrigger=_ref17.onTrigger;var instance=currentInstance;var getter;var forceTrigger=false;var isMultiSource=false;if(isRef(source)){getter=function getter(){return source.value;};forceTrigger=!!source._shallow;}else if(isReactive(source)){getter=function getter(){return source;};deep=true;}else if(isArray(source)){isMultiSource=true;forceTrigger=source.some(isReactive);getter=function getter(){return source.map(function(s){if(isRef(s)){return s.value;}else if(isReactive(s)){return traverse(s);}else if(isFunction$1(s)){return callWithErrorHandling(s,instance,2/* WATCH_GETTER */);}else;});};}else if(isFunction$1(source)){if(cb){// getter with cb
getter=function getter(){return callWithErrorHandling(source,instance,2/* WATCH_GETTER */);};}else{// no cb -> simple effect
getter=function getter(){if(instance&&instance.isUnmounted){return;}if(cleanup){cleanup();}return callWithAsyncErrorHandling(source,instance,3/* WATCH_CALLBACK */,[onInvalidate]);};}}else{getter=NOOP;}if(cb&&deep){var baseGetter=getter;getter=function getter(){return traverse(baseGetter());};}var cleanup;var onInvalidate=function onInvalidate(fn){cleanup=effect.onStop=function(){callWithErrorHandling(fn,instance,4/* WATCH_CLEANUP */);};};// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager
if(isInSSRComponentSetup){// we will also not call the invalidate callback (+ runner is not set up)
onInvalidate=NOOP;if(!cb){getter();}else if(immediate){callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[getter(),isMultiSource?[]:undefined,onInvalidate]);}return NOOP;}var oldValue=isMultiSource?[]:INITIAL_WATCHER_VALUE;var job=function job(){if(!effect.active){return;}if(cb){// watch(source, cb)
var newValue=effect.run();if(deep||forceTrigger||(isMultiSource?newValue.some(function(v,i){return hasChanged(v,oldValue[i]);}):hasChanged(newValue,oldValue))||false){// cleanup before running cb again
if(cleanup){cleanup();}callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[newValue,// pass undefined as the old value when it's changed for the first time
oldValue===INITIAL_WATCHER_VALUE?undefined:oldValue,onInvalidate]);oldValue=newValue;}}else{// watchEffect
effect.run();}};// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
job.allowRecurse=!!cb;var scheduler;if(flush==='sync'){scheduler=job;// the scheduler function gets called directly
}else if(flush==='post'){scheduler=function scheduler(){return queuePostRenderEffect(job,instance&&instance.suspense);};}else{// default: 'pre'
scheduler=function scheduler(){if(!instance||instance.isMounted){queuePreFlushCb(job);}else{// with 'pre' option, the first call must happen before
// the component is mounted so it is called synchronously.
job();}};}var effect=new ReactiveEffect(getter,scheduler);// initial run
if(cb){if(immediate){job();}else{oldValue=effect.run();}}else if(flush==='post'){queuePostRenderEffect(effect.run.bind(effect),instance&&instance.suspense);}else{effect.run();}return function(){effect.stop();if(instance&&instance.scope){remove(instance.scope.effects,effect);}};}// this.$watch
function instanceWatch(source,value,options){var publicThis=this.proxy;var getter=isString(source)?source.includes('.')?createPathGetter(publicThis,source):function(){return publicThis[source];}:source.bind(publicThis,publicThis);var cb;if(isFunction$1(value)){cb=value;}else{cb=value.handler;options=value;}var cur=currentInstance;setCurrentInstance(this);var res=doWatch(getter,cb.bind(publicThis),options);if(cur){setCurrentInstance(cur);}else{unsetCurrentInstance();}return res;}function createPathGetter(ctx,path){var segments=path.split('.');return function(){var cur=ctx;for(var i=0;i<segments.length&&cur;i++){cur=cur[segments[i]];}return cur;};}function traverse(value,seen){if(!isObject$2(value)||value["__v_skip"/* SKIP */]){return value;}seen=seen||new Set();if(seen.has(value)){return value;}seen.add(value);if(isRef(value)){traverse(value.value,seen);}else if(isArray(value)){for(var i=0;i<value.length;i++){traverse(value[i],seen);}}else if(isSet(value)||isMap(value)){value.forEach(function(v){traverse(v,seen);});}else if(isPlainObject(value)){for(var key in value){traverse(value[key],seen);}}return value;}var isFunction=function isFunction(val){return typeof val==='function';};var isObject$1=function isObject$1(val){return val!==null&&_typeof(val)==='object';};var isPromise=function isPromise(val){return isObject$1(val)&&isFunction(val.then)&&isFunction(val.catch);};/**
             * `<script setup>` helper for persisting the current instance context over
             * async/await flows.
             *
             * `@vue/compiler-sfc` converts the following:
             *
             * ```ts
             * const x = await foo()
             * ```
             *
             * into:
             *
             * ```ts
             * let __temp, __restore
             * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
             * ```
             * @internal
             */function withAsyncContext(getAwaitable){var ctx=getCurrentInstance();var awaitable=getAwaitable();unsetCurrentInstance();if(isPromise(awaitable)){awaitable=awaitable.catch(function(e){setCurrentInstance(ctx);throw e;});}return[awaitable,function(){return setCurrentInstance(ctx);}];}// Core API ------------------------------------------------------------------
var version="3.2.19";var svgNS='http://www.w3.org/2000/svg';var doc=typeof document!=='undefined'?document:null;var staticTemplateCache=new Map();var nodeOps={insert:function insert(child,parent,anchor){parent.insertBefore(child,anchor||null);},remove:function remove(child){var parent=child.parentNode;if(parent){parent.removeChild(child);}},createElement:function createElement(tag,isSVG,is,props){var el=isSVG?doc.createElementNS(svgNS,tag):doc.createElement(tag,is?{is:is}:undefined);if(tag==='select'&&props&&props.multiple!=null){el.setAttribute('multiple',props.multiple);}return el;},createText:function createText(text){return doc.createTextNode(text);},createComment:function createComment(text){return doc.createComment(text);},setText:function setText(node,text){node.nodeValue=text;},setElementText:function setElementText(el,text){el.textContent=text;},parentNode:function parentNode(node){return node.parentNode;},nextSibling:function nextSibling(node){return node.nextSibling;},querySelector:function querySelector(selector){return doc.querySelector(selector);},setScopeId:function setScopeId(el,id){el.setAttribute(id,'');},cloneNode:function cloneNode(el){var cloned=el.cloneNode(true);// #3072
// - in `patchDOMProp`, we store the actual value in the `el._value` property.
// - normally, elements using `:value` bindings will not be hoisted, but if
//   the bound value is a constant, e.g. `:value="true"` - they do get
//   hoisted.
// - in production, hoisted nodes are cloned when subsequent inserts, but
//   cloneNode() does not copy the custom property we attached.
// - This may need to account for other custom DOM properties we attach to
//   elements in addition to `_value` in the future.
if("_value"in el){cloned._value=el._value;}return cloned;},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent:function insertStaticContent(content,parent,anchor,isSVG){// <parent> before | first ... last | anchor </parent>
var before=anchor?anchor.previousSibling:parent.lastChild;var template=staticTemplateCache.get(content);if(!template){var t=doc.createElement('template');t.innerHTML=isSVG?"<svg>".concat(content,"</svg>"):content;template=t.content;if(isSVG){// remove outer svg wrapper
var wrapper=template.firstChild;while(wrapper.firstChild){template.appendChild(wrapper.firstChild);}template.removeChild(wrapper);}staticTemplateCache.set(content,template);}parent.insertBefore(template.cloneNode(true),anchor);return[// first
before?before.nextSibling:parent.firstChild,// last
anchor?anchor.previousSibling:parent.lastChild];}};// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el,value,isSVG){// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
var transitionClasses=el._vtc;if(transitionClasses){value=(value?[value].concat(_toConsumableArray(transitionClasses)):_toConsumableArray(transitionClasses)).join(' ');}if(value==null){el.removeAttribute('class');}else if(isSVG){el.setAttribute('class',value);}else{el.className=value;}}function patchStyle(el,prev,next){var style=el.style;var currentDisplay=style.display;if(!next){el.removeAttribute('style');}else if(isString(next)){if(prev!==next){style.cssText=next;}}else{for(var key in next){setStyle(style,key,next[key]);}if(prev&&!isString(prev)){for(var _key13 in prev){if(next[_key13]==null){setStyle(style,_key13,'');}}}}// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style` value,
// thus handing over control to `v-show`.
if('_vod'in el){style.display=currentDisplay;}}var importantRE=/\s*!important$/;function setStyle(style,name,val){if(isArray(val)){val.forEach(function(v){return setStyle(style,name,v);});}else{if(name.startsWith('--')){// custom property definition
style.setProperty(name,val);}else{var prefixed=autoPrefix(style,name);if(importantRE.test(val)){// !important
style.setProperty(hyphenate(prefixed),val.replace(importantRE,''),'important');}else{style[prefixed]=val;}}}}var prefixes=['Webkit','Moz','ms'];var prefixCache={};function autoPrefix(style,rawName){var cached=prefixCache[rawName];if(cached){return cached;}var name=camelize(rawName);if(name!=='filter'&&name in style){return prefixCache[rawName]=name;}name=capitalize(name);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+name;if(prefixed in style){return prefixCache[rawName]=prefixed;}}return rawName;}var xlinkNS='http://www.w3.org/1999/xlink';function patchAttr(el,key,value,isSVG,instance){if(isSVG&&key.startsWith('xlink:')){if(value==null){el.removeAttributeNS(xlinkNS,key.slice(6,key.length));}else{el.setAttributeNS(xlinkNS,key,value);}}else{// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
var isBoolean=isSpecialBooleanAttr(key);if(value==null||isBoolean&&!includeBooleanAttr(value)){el.removeAttribute(key);}else{el.setAttribute(key,isBoolean?'':value);}}}// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el,key,value,// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren,parentComponent,parentSuspense,unmountChildren){if(key==='innerHTML'||key==='textContent'){if(prevChildren){unmountChildren(prevChildren,parentComponent,parentSuspense);}el[key]=value==null?'':value;return;}if(key==='value'&&el.tagName!=='PROGRESS'){// store value as _value as well since
// non-string values will be stringified.
el._value=value;var newValue=value==null?'':value;if(el.value!==newValue){el.value=newValue;}if(value==null){el.removeAttribute(key);}return;}if(value===''||value==null){var type=_typeof(el[key]);if(type==='boolean'){// e.g. <select multiple> compiles to { multiple: '' }
el[key]=includeBooleanAttr(value);return;}else if(value==null&&type==='string'){// e.g. <div :id="null">
el[key]='';el.removeAttribute(key);return;}else if(type==='number'){// e.g. <img :width="null">
// the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
try{el[key]=0;}catch(_a){}el.removeAttribute(key);return;}}// some properties perform value validation and throw
try{el[key]=value;}catch(e){}}// Async edge case fix requires storing an event listener's attach timestamp.
var _getNow=Date.now;var skipTimestampCheck=false;if(typeof window!=='undefined'){// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if(_getNow()>document.createEvent('Event').timeStamp){// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
_getNow=function _getNow(){return performance.now();};}// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
var ffMatch=navigator.userAgent.match(/firefox\/(\d+)/i);skipTimestampCheck=!!(ffMatch&&Number(ffMatch[1])<=53);}// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
var cachedNow=0;var p=Promise.resolve();var reset=function reset(){cachedNow=0;};var getNow=function getNow(){return cachedNow||(p.then(reset),cachedNow=_getNow());};function addEventListener(el,event,handler,options){el.addEventListener(event,handler,options);}function removeEventListener(el,event,handler,options){el.removeEventListener(event,handler,options);}function patchEvent(el,rawName,prevValue,nextValue){var instance=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;// vei = vue event invokers
var invokers=el._vei||(el._vei={});var existingInvoker=invokers[rawName];if(nextValue&&existingInvoker){// patch
existingInvoker.value=nextValue;}else{var _parseName=parseName(rawName),_parseName2=_slicedToArray(_parseName,2),name=_parseName2[0],options=_parseName2[1];if(nextValue){// add
var invoker=invokers[rawName]=createInvoker(nextValue,instance);addEventListener(el,name,invoker,options);}else if(existingInvoker){// remove
removeEventListener(el,name,existingInvoker,options);invokers[rawName]=undefined;}}}var optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(name){var options;if(optionsModifierRE.test(name)){options={};var m;while(m=name.match(optionsModifierRE)){name=name.slice(0,name.length-m[0].length);options[m[0].toLowerCase()]=true;}}return[hyphenate(name.slice(2)),options];}function createInvoker(initialValue,instance){var invoker=function invoker(e){// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
var timeStamp=e.timeStamp||_getNow();if(skipTimestampCheck||timeStamp>=invoker.attached-1){callWithAsyncErrorHandling(patchStopImmediatePropagation(e,invoker.value),instance,5/* NATIVE_EVENT_HANDLER */,[e]);}};invoker.value=initialValue;invoker.attached=getNow();return invoker;}function patchStopImmediatePropagation(e,value){if(isArray(value)){var originalStop=e.stopImmediatePropagation;e.stopImmediatePropagation=function(){originalStop.call(e);e._stopped=true;};return value.map(function(fn){return function(e){return!e._stopped&&fn(e);};});}else{return value;}}var nativeOnRE=/^on[a-z]/;var patchProp=function patchProp(el,key,prevValue,nextValue){var isSVG=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var prevChildren=arguments.length>5?arguments[5]:undefined;var parentComponent=arguments.length>6?arguments[6]:undefined;var parentSuspense=arguments.length>7?arguments[7]:undefined;var unmountChildren=arguments.length>8?arguments[8]:undefined;if(key==='class'){patchClass(el,nextValue,isSVG);}else if(key==='style'){patchStyle(el,prevValue,nextValue);}else if(isOn(key)){// ignore v-model listeners
if(!isModelListener(key)){patchEvent(el,key,prevValue,nextValue,parentComponent);}}else if(key[0]==='.'?(key=key.slice(1),true):key[0]==='^'?(key=key.slice(1),false):shouldSetAsProp(el,key,nextValue,isSVG)){patchDOMProp(el,key,nextValue,prevChildren,parentComponent,parentSuspense,unmountChildren);}else{// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
if(key==='true-value'){el._trueValue=nextValue;}else if(key==='false-value'){el._falseValue=nextValue;}patchAttr(el,key,nextValue,isSVG);}};function shouldSetAsProp(el,key,value,isSVG){if(isSVG){// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
if(key==='innerHTML'||key==='textContent'){return true;}// or native onclick with function values
if(key in el&&nativeOnRE.test(key)&&isFunction$1(value)){return true;}return false;}// spellcheck and draggable are numerated attrs, however their
// corresponding DOM properties are actually booleans - this leads to
// setting it with a string "false" value leading it to be coerced to
// `true`, so we need to always treat them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
if(key==='spellcheck'||key==='draggable'){return false;}// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
if(key==='form'){return false;}// #1526 <input list> must be set as attribute
if(key==='list'&&el.tagName==='INPUT'){return false;}// #2766 <textarea type> must be set as attribute
if(key==='type'&&el.tagName==='TEXTAREA'){return false;}// native onclick with string value, must be set as attribute
if(nativeOnRE.test(key)&&isString(value)){return false;}return key in el;}function defineCustomElement(options,hydate){var Comp=defineComponent(options);var VueCustomElement=/*#__PURE__*/function(_VueElement){_inherits(VueCustomElement,_VueElement);var _super=_createSuper(VueCustomElement);function VueCustomElement(initialProps){_classCallCheck(this,VueCustomElement);return _super.call(this,Comp,initialProps,hydate);}return VueCustomElement;}(VueElement);VueCustomElement.def=Comp;return VueCustomElement;}var BaseClass=typeof HTMLElement!=='undefined'?HTMLElement:/*#__PURE__*/function(){function _class(){_classCallCheck(this,_class);}return _class;}();var VueElement=/*#__PURE__*/function(_BaseClass){_inherits(VueElement,_BaseClass);var _super2=_createSuper(VueElement);function VueElement(_def){var _this2;var _props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var hydrate=arguments.length>2?arguments[2]:undefined;_classCallCheck(this,VueElement);_this2=_super2.call(this);_this2._def=_def;_this2._props=_props;/**
                     * @internal
                     */_this2._instance=null;_this2._connected=false;_this2._resolved=false;_this2._numberProps=null;if(_this2.shadowRoot&&hydrate){hydrate(_this2._createVNode(),_this2.shadowRoot);}else{_this2.attachShadow({mode:'open'});}// set initial attrs
for(var i=0;i<_this2.attributes.length;i++){_this2._setAttr(_this2.attributes[i].name);}// watch future attr changes
new MutationObserver(function(mutations){var _iterator3=_createForOfIteratorHelper(mutations),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var m=_step3.value;_this2._setAttr(m.attributeName);}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}}).observe(_assertThisInitialized(_this2),{attributes:true});return _this2;}_createClass(VueElement,[{key:"connectedCallback",value:function connectedCallback(){this._connected=true;if(!this._instance){this._resolveDef();this._update();}}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this3=this;this._connected=false;nextTick(function(){if(!_this3._connected){render(null,_this3.shadowRoot);_this3._instance=null;}});}/**
                 * resolve inner component definition (handle possible async component)
                 */},{key:"_resolveDef",value:function _resolveDef(){var _this4=this;if(this._resolved){return;}var resolve=function resolve(def){_this4._resolved=true;var props=def.props,styles=def.styles;var hasOptions=!isArray(props);var rawKeys=props?hasOptions?Object.keys(props):props:[];// cast Number-type props set before resolve
var numberProps;if(hasOptions){for(var key in _this4._props){var opt=props[key];if(opt===Number||opt&&opt.type===Number){_this4._props[key]=toNumber$1(_this4._props[key]);(numberProps||(numberProps=Object.create(null)))[key]=true;}}}if(numberProps){_this4._numberProps=numberProps;_this4._update();}// check if there are props set pre-upgrade or connect
for(var _i2=0,_Object$keys=Object.keys(_this4);_i2<_Object$keys.length;_i2++){var _key14=_Object$keys[_i2];if(_key14[0]!=='_'){_this4._setProp(_key14,_this4[_key14]);}}// defining getter/setters on prototype
var _iterator4=_createForOfIteratorHelper(rawKeys.map(camelize)),_step4;try{var _loop3=function _loop3(){var key=_step4.value;Object.defineProperty(_this4,key,{get:function get(){return this._getProp(key);},set:function set(val){this._setProp(key,val);}});};for(_iterator4.s();!(_step4=_iterator4.n()).done;){_loop3();}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}_this4._applyStyles(styles);};var asyncDef=this._def.__asyncLoader;if(asyncDef){asyncDef().then(resolve);}else{resolve(this._def);}}},{key:"_setAttr",value:function _setAttr(key){var value=this.getAttribute(key);if(this._numberProps&&this._numberProps[key]){value=toNumber$1(value);}this._setProp(camelize(key),value,false);}/**
                 * @internal
                 */},{key:"_getProp",value:function _getProp(key){return this._props[key];}/**
                 * @internal
                 */},{key:"_setProp",value:function _setProp(key,val){var shouldReflect=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(val!==this._props[key]){this._props[key]=val;if(this._instance){this._update();}// reflect
if(shouldReflect){if(val===true){this.setAttribute(hyphenate(key),'');}else if(typeof val==='string'||typeof val==='number'){this.setAttribute(hyphenate(key),val+'');}else if(!val){this.removeAttribute(hyphenate(key));}}}}},{key:"_update",value:function _update(){render(this._createVNode(),this.shadowRoot);}},{key:"_createVNode",value:function _createVNode(){var _this5=this;var vnode=createVNode(this._def,extend({},this._props));if(!this._instance){vnode.ce=function(instance){_this5._instance=instance;instance.isCE=true;// intercept emit
instance.emit=function(event){for(var _len6=arguments.length,args=new Array(_len6>1?_len6-1:0),_key15=1;_key15<_len6;_key15++){args[_key15-1]=arguments[_key15];}_this5.dispatchEvent(new CustomEvent(event,{detail:args}));};// locate nearest Vue custom element parent for provide/inject
var parent=_this5;while(parent=parent&&(parent.parentNode||parent.host)){if(parent instanceof VueElement){instance.parent=parent._instance;break;}}};}return vnode;}},{key:"_applyStyles",value:function _applyStyles(styles){var _this6=this;if(styles){styles.forEach(function(css){var s=document.createElement('style');s.textContent=css;_this6.shadowRoot.appendChild(s);});}}}]);return VueElement;}(BaseClass);var rendererOptions=extend({patchProp:patchProp},nodeOps);// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
var renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions));}// use explicit type casts here to avoid import() calls in rolled-up d.ts
var render=function render(){var _ensureRenderer;(_ensureRenderer=ensureRenderer()).render.apply(_ensureRenderer,arguments);};var createApp=exports('q',function(){var _ensureRenderer2;var app=(_ensureRenderer2=ensureRenderer()).createApp.apply(_ensureRenderer2,arguments);var mount=app.mount;app.mount=function(containerOrSelector){var container=normalizeContainer(containerOrSelector);if(!container)return;var component=app._component;if(!isFunction$1(component)&&!component.render&&!component.template){// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
component.template=container.innerHTML;}// clear content before mounting
container.innerHTML='';var proxy=mount(container,false,container instanceof SVGElement);if(container instanceof Element){container.removeAttribute('v-cloak');container.setAttribute('data-v-app','');}return proxy;};return app;});function normalizeContainer(container){if(isString(container)){var res=document.querySelector(container);return res;}return container;}/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;var freeGlobal$1=freeGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal$1||freeSelf||Function('return this')();var root$1=root;/** Built-in value references. */var Symbol$1=root$1.Symbol;var Symbol$2=Symbol$1;/** Used for built-in method references. */var objectProto$1=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto$1.hasOwnProperty;/**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */var nativeObjectToString$1=objectProto$1.toString;/** Built-in value references. */var symToStringTag$1=Symbol$2?Symbol$2.toStringTag:undefined;/**
             * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the raw `toStringTag`.
             */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString$1.call(value);if(unmasked){if(isOwn){value[symToStringTag$1]=tag;}else{delete value[symToStringTag$1];}}return result;}/** Used for built-in method references. */var objectProto=Object.prototype;/**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */var nativeObjectToString=objectProto.toString;/**
             * Converts `value` to a string using `Object.prototype.toString`.
             *
             * @private
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             */function objectToString(value){return nativeObjectToString.call(value);}/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=Symbol$2?Symbol$2.toStringTag:undefined;/**
             * The base implementation of `getTag` without fallbacks for buggy environments.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
             * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
             * character of `string`.
             *
             * @private
             * @param {string} string The string to inspect.
             * @returns {number} Returns the index of the last non-whitespace character.
             */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
             * The base implementation of `_.trim`.
             *
             * @private
             * @param {string} string The string to trim.
             * @returns {string} Returns the trimmed string.
             */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}/**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
             * Converts `value` to a number.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to process.
             * @returns {number} Returns the number.
             * @example
             *
             * _.toNumber(3.2);
             * // => 3.2
             *
             * _.toNumber(Number.MIN_VALUE);
             * // => 5e-324
             *
             * _.toNumber(Infinity);
             * // => Infinity
             *
             * _.toNumber('3.2');
             * // => 3.2
             */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
             * Gets the timestamp of the number of milliseconds that have elapsed since
             * the Unix epoch (1 January 1970 00:00:00 UTC).
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Date
             * @returns {number} Returns the timestamp.
             * @example
             *
             * _.defer(function(stamp) {
             *   console.log(_.now() - stamp);
             * }, _.now());
             * // => Logs the number of milliseconds it took for the deferred invocation.
             */var now=function now(){return root$1.Date.now();};var now$1=now;/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max,nativeMin=Math.min;/**
             * Creates a debounced function that delays invoking `func` until after `wait`
             * milliseconds have elapsed since the last time the debounced function was
             * invoked. The debounced function comes with a `cancel` method to cancel
             * delayed `func` invocations and a `flush` method to immediately invoke them.
             * Provide `options` to indicate whether `func` should be invoked on the
             * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
             * with the last arguments provided to the debounced function. Subsequent
             * calls to the debounced function return the result of the last `func`
             * invocation.
             *
             * **Note:** If `leading` and `trailing` options are `true`, `func` is
             * invoked on the trailing edge of the timeout only if the debounced function
             * is invoked more than once during the `wait` timeout.
             *
             * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
             * until to the next tick, similar to `setTimeout` with a timeout of `0`.
             *
             * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
             * for details over the differences between `_.debounce` and `_.throttle`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Function
             * @param {Function} func The function to debounce.
             * @param {number} [wait=0] The number of milliseconds to delay.
             * @param {Object} [options={}] The options object.
             * @param {boolean} [options.leading=false]
             *  Specify invoking on the leading edge of the timeout.
             * @param {number} [options.maxWait]
             *  The maximum time `func` is allowed to be delayed before it's invoked.
             * @param {boolean} [options.trailing=true]
             *  Specify invoking on the trailing edge of the timeout.
             * @returns {Function} Returns the new debounced function.
             * @example
             *
             * // Avoid costly calculations while the window size is in flux.
             * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
             *
             * // Invoke `sendMail` when clicked, debouncing subsequent calls.
             * jQuery(element).on('click', _.debounce(sendMail, 300, {
             *   'leading': true,
             *   'trailing': false
             * }));
             *
             * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
             * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
             * var source = new EventSource('/stream');
             * jQuery(source).on('message', debounced);
             *
             * // Cancel the trailing debounced invocation.
             * jQuery(window).on('popstate', debounced.cancel);
             */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now$1();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now$1());}function debounced(){var time=now$1(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}}};});})();
