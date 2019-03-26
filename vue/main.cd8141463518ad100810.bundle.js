(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return colors});var colors=["#00a68f","#3b1a40","#473793","#3c6df0","#56D2BB"]},101:function(module,__webpack_exports__,__webpack_require__){"use strict";var charts=__webpack_require__(23),src_ccv_pie_chartvue_type_script_lang_js_={name:"CcvPieChart",extends:__webpack_require__(24).a,mounted:function mounted(){this.coreChart=new charts.PieChart(this.$el,{data:this.data,options:this.options})}},componentNormalizer=__webpack_require__(16),component=Object(componentNormalizer.a)(src_ccv_pie_chartvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"ccv-pie-chart"})},[],!1,null,null,null);__webpack_exports__.a=component.exports},102:function(module,__webpack_exports__,__webpack_require__){"use strict";var charts=__webpack_require__(23),src_ccv_donut_chartvue_type_script_lang_js_={name:"CcvDonutChart",extends:__webpack_require__(24).a,mounted:function mounted(){this.coreChart=new charts.DonutChart(this.$el,{data:this.data,options:this.options})}},componentNormalizer=__webpack_require__(16),component=Object(componentNormalizer.a)(src_ccv_donut_chartvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"ccv-donut-chart"})},[],!1,null,null,null);__webpack_exports__.a=component.exports},14:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return curvedLineData}),__webpack_require__.d(__webpack_exports__,"b",function(){return curvedLineOptions}),__webpack_require__.d(__webpack_exports__,"c",function(){return lineData}),__webpack_require__.d(__webpack_exports__,"d",function(){return lineOptions});var _helpers_commons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),curvedLineData={labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[0]],data:[65e3,79e3,49213,51213,16932]},{label:"Dataset 2",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[1]],data:[8e4,21312,56456,21312,0]},{label:"Dataset 3",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[2]],data:[12312,34232,39232,12312,34234]}]},curvedLineOptions={accessibility:!1,scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function formatter(axisValue){return"".concat(axisValue/1e3,"k")}},y2:{ticks:{max:1,min:0}}},curve:"curveNatural",legendClickable:!0,containerResizable:!0},lineData={labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[0]],data:[0,0,0,0,0]},{label:"Dataset 2",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[1]],data:[0,1e4,2e4,3e4,4e4]},{label:"Dataset 3",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[2]],data:[0,2e4,4e4,6e4,8e4]}]},lineOptions={accessibility:!1,scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function formatter(axisValue){return"".concat(axisValue/1e3,"k")}}},legendClickable:!0,containerResizable:!0}},166:function(module,exports,__webpack_require__){__webpack_require__(167),__webpack_require__(245),module.exports=__webpack_require__(246)},18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return basicPieData}),__webpack_require__.d(__webpack_exports__,"a",function(){return basicDonutOptions}),__webpack_require__.d(__webpack_exports__,"c",function(){return basicPieOptions});var _helpers_commons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),basicPieData={labels:["2V2N-9KYPM version 1","L22I-P66EP-L22I-P66EP-L22I-P66EP","JQAI-2M4L1","J9DZ-F37AP","YEL48-Q6XK-YEL48","P66EP-L22I-L22I","Q6XK-YEL48","XKB5-L6EP","YEL48-Q6XK","L22I-P66EP-L22I"],datasets:[{label:"Dataset 1",backgroundColors:_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a,data:[1e5,2e5,6e5,1e5,4e5,45e4,3e5,7e4,2e4,12e4]}]},basicDonutOptions={legendClickable:!0,containerResizable:!0,colors:_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a,center:{number:25423,label:"Browsers"}},basicPieOptions={accessibility:!1,legendClickable:!0,containerResizable:!0,colors:_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a}},24:function(module,__webpack_exports__,__webpack_require__){"use strict";var src_ccv_base_chartvue_type_script_lang_js_={name:"CcvBaseChart",data:function data(){return{coreChart:null}},props:{data:{type:Object,required:!0},options:{type:Object,required:!0}},watch:{data:{handler:function handler(newData){this.coreChart.setData(newData)},deep:!0}}},componentNormalizer=__webpack_require__(16),component=Object(componentNormalizer.a)(src_ccv_base_chartvue_type_script_lang_js_,void 0,void 0,!1,null,null,null);__webpack_exports__.a=component.exports},246:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(30),__webpack_require__(80),__webpack_require__(31);var _storybook_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(165);Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_4__.setOptions)({name:"Carbon Charts - Vue Wrappers",showDownPanel:!1}),__webpack_require__(304);var req=__webpack_require__(309);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_3__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(60)(module))},304:function(module,exports,__webpack_require__){var content=__webpack_require__(305);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0};__webpack_require__(307)(content,options);content.locals&&(module.exports=content.locals)},305:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(306)(void 0)).push([module.i,"div.chart-wrapper {\n  height: 500px; }\n",""])},309:function(module,exports,__webpack_require__){var map={"./bar.stories.js":310,"./line.stories.js":311,"./pie-donut.stories.js":339};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=309},310:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17),_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),barStories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Bar",module);barStories.add("Label-based legend",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{simpleBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.c,simpleBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.d}},template:'<ccv-bar-chart :data="simpleBarData" :options="simpleBarOptions"></ccv-bar-chart>'}}),barStories.add("Label-based legend (Accessible)",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{simpleBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.c,simpleBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.d}},template:'<ccv-bar-chart :data="simpleBarData" :options="Object.assign({}, simpleBarOptions, {accessibility: true})"></ccv-bar-chart>'}}),barStories.add("Grouped",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{groupedBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.a,groupedBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.b}},template:'<ccv-bar-chart :data="groupedBarData" :options="groupedBarOptions"></ccv-bar-chart>'}}),barStories.add("Grouped (Accessible)",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{groupedBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.a,groupedBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.b}},template:'<ccv-bar-chart :data="groupedBarData" :options="Object.assign({}, groupedBarOptions, {accessibility: true})"></ccv-bar-chart>'}}),barStories.add("Stacked",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{stackedBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.e,stackedBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.f}},template:'<ccv-bar-chart :data="stackedBarData" :options="stackedBarOptions"></ccv-bar-chart>'}}),barStories.add("Stacked (Accessible)",function(){return{components:{CcvBarChart:_src_ccv_bar_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{stackedBarData:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.e,stackedBarOptions:_bar_demo_data__WEBPACK_IMPORTED_MODULE_2__.f}},template:'<ccv-bar-chart :data="stackedBarData" :options="Object.assign({}, stackedBarOptions, {accessibility: true})"></ccv-bar-chart>'}})}.call(this,__webpack_require__(60)(module))},311:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__),_storybook_vue__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(32),__webpack_require__(17)),_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(40),_line_demo_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),lineStories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Line",module);lineStories.add("Basic",function(){return{components:{CcvLineChart:_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__.a},data:function data(){return{lineData:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.c,lineOptions:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.d}},template:'<ccv-line-chart :data="lineData" :options="lineOptions"></ccv-line-chart>'}}),lineStories.add("Natural Curve",function(){return{components:{CcvLineChart:_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__.a},data:function data(){return{curvedLineData:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.a,curvedLineOptions:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.b}},template:'<ccv-line-chart :data="curvedLineData" :options="curvedLineOptions"></ccv-line-chart>'}}),lineStories.add("Bundle Curve",function(){return{components:{CcvLineChart:_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__.a},data:function data(){return{curvedLineData:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.a,curveBundleOptions:_home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.b,{curve:"curveBundle"})}},template:'<ccv-line-chart :data="curvedLineData" :options="curveBundleOptions"></ccv-line-chart>'}}),lineStories.add("Monotone Y Curve",function(){return{components:{CcvLineChart:_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__.a},data:function data(){return{curvedLineData:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.a,curveMonotoneYOptions:_home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.b,{curve:"curveMonotoneY"})}},template:'<ccv-line-chart :data="curvedLineData" :options="curveMonotoneYOptions"></ccv-line-chart>'}}),lineStories.add("Monotone X Curve",function(){return{components:{CcvLineChart:_src_ccv_line_chart__WEBPACK_IMPORTED_MODULE_3__.a},data:function data(){return{curvedLineData:_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.a,curveMonotoneXOptions:_home_travis_build_carbon_design_system_carbon_charts_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},_line_demo_data__WEBPACK_IMPORTED_MODULE_4__.b,{curve:"curveMonotoneX"})}},template:'<ccv-line-chart :data="curvedLineData" :options="curveMonotoneXOptions"></ccv-line-chart>'}})}.call(this,__webpack_require__(60)(module))},33:function(module,__webpack_exports__,__webpack_require__){"use strict";var charts=__webpack_require__(23),src_ccv_bar_chartvue_type_script_lang_js_={name:"CcvBarChart",extends:__webpack_require__(24).a,mounted:function mounted(){this.coreChart=new charts.BarChart(this.$el,{data:this.data,options:this.options})}},componentNormalizer=__webpack_require__(16),component=Object(componentNormalizer.a)(src_ccv_bar_chartvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"ccv-bar-chart"})},[],!1,null,null,null);__webpack_exports__.a=component.exports},339:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17),_src_ccv_donut_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),_src_ccv_pie_chart__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101),_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),donutStories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Donut",module);donutStories.add("Basic",function(){return{components:{CcvDonutChart:_src_ccv_donut_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{basicPieData:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.b,basicDonutOptions:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.a}},template:'<ccv-donut-chart :data="basicPieData" :options="basicDonutOptions"></ccv-donut-chart>'}}),donutStories.add("Accessible",function(){return{components:{CcvDonutChart:_src_ccv_donut_chart__WEBPACK_IMPORTED_MODULE_1__.a},data:function data(){return{basicPieData:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.b,basicDonutOptions:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.a}},template:'<ccv-donut-chart :data="basicPieData" :options="Object.assign({}, basicDonutOptions, {accessibility: true})"></ccv-donut-chart>'}});var pieStories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Pie",module);pieStories.add("Basic",function(){return{components:{CcvPieChart:_src_ccv_pie_chart__WEBPACK_IMPORTED_MODULE_2__.a},data:function data(){return{basicPieData:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.b,basicPieOptions:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.c}},template:'<ccv-pie-chart :data="basicPieData" :options="basicPieOptions"></ccv-pie-chart>'}}),pieStories.add("Accessible",function(){return{components:{CcvPieChart:_src_ccv_pie_chart__WEBPACK_IMPORTED_MODULE_2__.a},data:function data(){return{basicPieData:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.b,basicPieOptions:_pie_donut_demo_data__WEBPACK_IMPORTED_MODULE_3__.c}},template:'<ccv-pie-chart :data="basicPieData" :options="Object.assign({}, basicPieOptions, {accessibility: true})"></ccv-pie-chart>'}})}.call(this,__webpack_require__(60)(module))},40:function(module,__webpack_exports__,__webpack_require__){"use strict";var charts=__webpack_require__(23),src_ccv_line_chartvue_type_script_lang_js_={name:"CcvLineChart",extends:__webpack_require__(24).a,mounted:function mounted(){this.coreChart=new charts.LineChart(this.$el,{data:this.data,options:this.options})}},componentNormalizer=__webpack_require__(16),component=Object(componentNormalizer.a)(src_ccv_line_chartvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"ccv-line-chart"})},[],!1,null,null,null);__webpack_exports__.a=component.exports},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return groupedBarData}),__webpack_require__.d(__webpack_exports__,"b",function(){return groupedBarOptions}),__webpack_require__.d(__webpack_exports__,"c",function(){return simpleBarData}),__webpack_require__.d(__webpack_exports__,"d",function(){return simpleBarOptions}),__webpack_require__.d(__webpack_exports__,"e",function(){return stackedBarData}),__webpack_require__.d(__webpack_exports__,"f",function(){return stackedBarOptions});var _helpers_commons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),groupedBarData={labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[0]],data:[65e3,-29123,-35213,51213,16932]},{label:"Dataset 2",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[1]],data:[32432,-21312,-56456,-21312,34234]},{label:"Dataset 3",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[2]],data:[-12312,23232,34232,-12312,-34234]},{label:"Dataset 4",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[3]],data:[-32423,21313,64353,24134,32423]}]},groupedBarOptions={scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function formatter(axisValue){return"".concat(axisValue/1e3,"k")},yMaxAdjuster:function yMaxAdjuster(yMaxValue){return 1.1*yMaxValue}},y2:{ticks:{max:1,min:0},formatter:function formatter(axisValue){return"".concat(100*axisValue,"%")}}},legendClickable:!0,containerResizable:!0},simpleBarData={labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a,data:[65e3,29123,35213,51213,16932]}]},simpleBarOptions={accessibility:!1,scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function formatter(axisValue){return"".concat(axisValue/1e3,"k")},yMaxAdjuster:function yMaxAdjuster(yMaxValue){return 1.1*yMaxValue},stacked:!1}},legendClickable:!0,containerResizable:!0},stackedBarData={labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[0]],data:[65e3,29123,35213,51213,16932]},{label:"Dataset 2",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[1]],data:[32432,21312,56456,21312,34234]},{label:"Dataset 3",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[2]],data:[12312,23232,34232,12312,34234]},{label:"Dataset 4",backgroundColors:[_helpers_commons__WEBPACK_IMPORTED_MODULE_0__.a[3]],data:[32423,21313,64353,24134,32423]}]},stackedBarOptions={accessibility:!1,scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function formatter(axisValue){return"".concat(axisValue/1e3,"k")},yMaxAdjuster:function yMaxAdjuster(yMaxValue){return 1.1*yMaxValue},stacked:!0}},legendClickable:!0,containerResizable:!0}}},[[166,1,2]]]);
//# sourceMappingURL=main.cd8141463518ad100810.bundle.js.map