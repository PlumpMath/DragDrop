// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.flapjax_cljs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('F.Behavior');
goog.require('F.dom_');
goog.require('F');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom');
A = F.dom_.makeTagB.call(null,"a");
B = F.dom_.makeTagB.call(null,"b");
BLOCKQUOTE = F.dom_.makeTagB.call(null,"blockquote");
BR = F.dom_.makeTagB.call(null,"br");
BUTTON = F.dom_.makeTagB.call(null,"button");
CANVAS = F.dom_.makeTagB.call(null,"canvas");
DIV = F.dom_.makeTagB.call(null,"div");
FIELDSET = F.dom_.makeTagB.call(null,"fieldset");
FORM = F.dom_.makeTagB.call(null,"form");
FONT = F.dom_.makeTagB.call(null,"font");
H1 = F.dom_.makeTagB.call(null,"h1");
H2 = F.dom_.makeTagB.call(null,"h2");
H3 = F.dom_.makeTagB.call(null,"h3");
H4 = F.dom_.makeTagB.call(null,"h4");
HR = F.dom_.makeTagB.call(null,"hr");
IFRAME = F.dom_.makeTagB.call(null,"iframe");
INPUT = F.dom_.makeTagB.call(null,"input");
LABEL = F.dom_.makeTagB.call(null,"label");
LEGEND = F.dom_.makeTagB.call(null,"legend");
LI = F.dom_.makeTagB.call(null,"li");
OL = F.dom_.makeTagB.call(null,"ol");
OPTGROUP = F.dom_.makeTagB.call(null,"optgroup");
OPTION = F.dom_.makeTagB.call(null,"option");
P = F.dom_.makeTagB.call(null,"p");
SELECT = F.dom_.makeTagB.call(null,"select");
SPAN = F.dom_.makeTagB.call(null,"span");
STRONG = F.dom_.makeTagB.call(null,"strong");
TABLE = F.dom_.makeTagB.call(null,"table");
TBODY = F.dom_.makeTagB.call(null,"tbody");
TD = F.dom_.makeTagB.call(null,"td");
TEXTAREA = F.dom_.makeTagB.call(null,"textarea");
TFOOT = F.dom_.makeTagB.call(null,"tfoot");
TH = F.dom_.makeTagB.call(null,"th");
THEAD = F.dom_.makeTagB.call(null,"thead");
TR = F.dom_.makeTagB.call(null,"tr");
TT = F.dom_.makeTagB.call(null,"tt");
UL = F.dom_.makeTagB.call(null,"ul");
ewen.flapjax_cljs.EventStream = F.EventStream;
ewen.flapjax_cljs.Behavior = F.Behavior;
ewen.flapjax_cljs.startsWith = (function startsWith(streamE,v){return streamE.startsWith(v);
});
ewen.flapjax_cljs.changes = (function changes(sourceB){return sourceB.changes();
});
ewen.flapjax_cljs.oneE = F.oneE;
ewen.flapjax_cljs.zeroE = F.zeroE;
ewen.flapjax_cljs.mapE = F.mapE;
ewen.flapjax_cljs.mergeE = F.mergeE;
ewen.flapjax_cljs.switchE = (function switchE(streamE){return streamE.switchE();
});
ewen.flapjax_cljs.filterE = (function filterE(pred,streamE){return streamE.filterE(pred);
});
ewen.flapjax_cljs.constantE = (function constantE(streamE,v){return streamE.constantE(v);
});
ewen.flapjax_cljs.collectE = (function collectE(streamE,init,f){return streamE.collectE(init,f);
});
ewen.flapjax_cljs.notE = (function notE(streamE){return streamE.notE();
});
ewen.flapjax_cljs.filterRepeatsE = (function filterRepeatsE(streamE){return streamE.filterRepeatsE();
});
ewen.flapjax_cljs.receiverE = F.receiverE;
ewen.flapjax_cljs.sendEvent = F.sendEvent;
ewen.flapjax_cljs.snapshotE = (function snapshotE(streamE,valueB){return streamE.snapshotE(valueB);
});
ewen.flapjax_cljs.onceE = (function onceE(streamE){return streamE.onceE();
});
ewen.flapjax_cljs.skipFirstE = (function skipFirstE(streamE){return streamE.skipFirstE();
});
ewen.flapjax_cljs.delayE = (function delayE(streamE,intervalB){return streamE.delayE(intervalB);
});
ewen.flapjax_cljs.blindE = (function blindE(streamE,intervalB){return streamE.blindE(intervalB);
});
ewen.flapjax_cljs.calmE = (function calmE(streamE,intervalB){return streamE.calmE(intervalB);
});
ewen.flapjax_cljs.timerE = F.timerE;
ewen.flapjax_cljs.extractEventE = F.extractEventE;
ewen.flapjax_cljs.extractValueE = F.extractValueE;
ewen.flapjax_cljs.insertValueE = F.insertValueE;
ewen.flapjax_cljs.clicksE = F.clicksE;
ewen.flapjax_cljs.constantB = F.constantB;
ewen.flapjax_cljs.delayB = (function delayB(sourceB,intervalB){return sourceB.delayB(intervalB);
});
ewen.flapjax_cljs.valueNow = (function valueNow(sourceB){return sourceB.valueNow();
});
ewen.flapjax_cljs.switchB = (function switchB(sourceBB){return sourceBB.switchB();
});
ewen.flapjax_cljs.andB = F.Behavior.andB;
ewen.flapjax_cljs.orB = F.Behavior.orB;
ewen.flapjax_cljs.notB = (function notB(valueB){return valueB.notB();
});
ewen.flapjax_cljs.liftB = F.liftB;
ewen.flapjax_cljs.condB = F.condB;
ewen.flapjax_cljs.ifB = (function ifB(predicateB,consequentB,alternativeB){return predicateB.ifB(consequentB,alternativeB);
});
ewen.flapjax_cljs.timerB = F.timerB;
ewen.flapjax_cljs.blindB = (function blindB(sourceB,intervalB){return sourceB.blindB(intervalB);
});
ewen.flapjax_cljs.calmB = (function calmB(sourceB,intervalB){return sourceB.calmB(intervalB);
});
ewen.flapjax_cljs.extractValueB = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("extractValueB",cljs.core.type,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,ewen.flapjax_cljs.extractValueB,new cljs.core.Keyword(null,"default","default",2558708147),(function (in_obj){return F.extractValueB.call(null,in_obj);
}));
/**
* Every modification to the targeted Atom is propagated to the `receiv` Behavior
*/
ewen.flapjax_cljs.extractValueB_Atom = cljs.core.memoize.call(null,(function (atom_in){var receiv = ewen.flapjax_cljs.receiverE.call(null);cljs.core.add_watch.call(null,atom_in,cljs.core.keyword.call(null,cljs.core.gensym.call(null)),(function (k,r,o,n){return ewen.flapjax_cljs.sendEvent.call(null,receiv,n);
}));
return ewen.flapjax_cljs.startsWith.call(null,receiv,cljs.core.deref.call(null,atom_in));
}));
cljs.core.swap_BANG_.call(null,ewen.flapjax_cljs.extractValueB.method_table,(function (p1__8519_SHARP_){return cljs.core.assoc.call(null,p1__8519_SHARP_,cljs.core.Atom,ewen.flapjax_cljs.extractValueB_Atom);
}));

//# sourceMappingURL=flapjax_cljs.js.map