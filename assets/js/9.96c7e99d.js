(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(i,a,e){},743:function(i,a,e){"use strict";var p=e(408);e.n(p).a},755:function(i,a,e){"use strict";e.r(a);var p={components:{imagePreview:e(423).default},data:function(){return{activeNames:["0"],model:[{title:"亢龙有悔（大盘，日线）",smallImg:"gupiao/亢龙有悔/logo.png",desc:"大盘模型",mainImg:"gupiao/亢龙有悔/klyh.png",conditions:["第一天的阴线尽量小","第二天的阴线尽量大","第三天的阳线要低开高收"],example:["gupiao/亢龙有悔/example1.png"],remark:"\n                        <div>止盈： 5-10日内的大阳线收盘价；任意阴线</div>\n                        <div>止损： 该模型的最低价</div>\n                        <div>可以多在沪深300，上证50里找</div>\n                    "},{title:"半价次新股",desc:"次新股 下跌至一半的价格，或继续下跌至33%的价位",conditions:["最开始的一字涨停板到第一波最高点后下跌，等待到50%的位置再观察是否还将继续下跌","半价买入或者底部直接买入，盈利20%"],remark:"\n                        <div>注意分仓、交易计划</div>\n                        <div>大盘趋势不好的时候，要注意使用</div>\n                    "},{title:"七星落长空 - I型（个股，日线）",smallImg:"gupiao/七星/七星-1-img.png",desc:"下跌趋势中的底部模型",mainImg:"gupiao/七星/七星-1.png",conditions:["1. 阴阳线的真、假都可以(*①)","2. 阴阳线的大、小都行","3. 阴阳线的高低开都可以","4. 下跌趋势中，基本都在底部"],example:["gupiao/七星/example1-1.png","gupiao/七星/example12-1.png"],remark:'<a href="https://live.study.163.com/live/index.html?courseId=100080957&lesson=103776758&type=1">1. 第一阶段 -> 短线抄底模型 -> 2、3课 </a>\n                        <div>2. 无论 I型 还是 II型，都是短线抄底模型，见好就收，不要拿着不放</div>\n                    '},{title:"七星落长空 - II型（个股，日线）",smallImg:"gupiao/七星/七星-2-img.png",desc:"下跌趋势中的底部模型",mainImg:"gupiao/七星/七星-2.png",example:["gupiao/七星/example12-1.png","gupiao/七星/example2-1.png","gupiao/七星/example2-2.png"],conditions:["阴阳线的真、假都可以","阴阳线的大、小都行","阴阳线的高低开都可以","4. 下跌趋势中，基本都在底部"],remark:"无论 I型 还是 II型，都是短线抄底模型，见好就收，不要拿着不放"},{title:"看跌做涨（个股，周线）",smallImg:"gupiao/价格中枢/logo.png",desc:"下跌后的筑底",mainImg:"gupiao/价格中枢/jgzs.png",example:["gupiao/价格中枢/example1.png","gupiao/价格中枢/example2.png","gupiao/价格中枢/example3.png","gupiao/价格中枢/example4.png","gupiao/价格中枢/example5.png","gupiao/价格中枢/example6.png"],remark:"\n                        低开：既可是阴线， 也可以是阳线\n                        <div>如果低开后实体很大就不是</div>\n                        新条件：\n                        <div>收益30% - 50%</div>\n                        <div>不能高开高走</div>\n                        <div>第二周最好别涨上来，希望弱势些</div>\n                        <div>第三周最好都是先跌后涨的(周一到周三跌，到周五涨)</div>\n                    "},{title:"看涨做涨（个股，周线）",smallImg:"gupiao/价格中枢/logo2.png",desc:"上涨初期或中期",mainImg:"gupiao/价格中枢/jgzs2.png",example:["gupiao/价格中枢/example2-1.png","gupiao/价格中枢/example2-2.png"],remark:"\n                        <div>第二周高开后，确认是上涨状态，周三就可以买入</div>\n                    "},{title:"看涨阴线1（个股，周线）",smallImg:"gupiao/价格中枢/看涨阴线/logo1.png",desc:"上涨途中的回调",mainImg:"gupiao/价格中枢/看涨阴线/kzyx1.png",example:["gupiao/价格中枢/看涨阴线/example1-1.png","gupiao/价格中枢/看涨阴线/example1-2.png"],remark:"\n                    <div>止损：近期最低价</div>\n                    <div>第二周阳线的低开，相对于价格中枢来说</div>\n                    <div>周中或下周买入</div>\n                    "},{title:"看涨阴线2（个股，周线）",smallImg:"gupiao/价格中枢/看涨阴线/logo2.png",desc:"上涨途中的回调",mainImg:"gupiao/价格中枢/看涨阴线/kzyx2.png",example:["gupiao/价格中枢/看涨阴线/example2-1.png","gupiao/价格中枢/看涨阴线/example2-2.png","gupiao/价格中枢/看涨阴线/example2-3.png"],remark:"\n                    <div>止损：近期最低价</div>\n                    <div>第二周无论高开、低开。放量、缩量 都可以</div>\n                    <div>大阴线的影线： 上必需要但不能太长， 下最好没有或极短</div>\n                    <div>周中或下周买入</div>\n                    "},{title:"看跌阴线3（个股，周线）",smallImg:"gupiao/价格中枢/看跌阴线/logo3.png",desc:"上涨的末期",mainImg:"gupiao/价格中枢/看跌阴线/kdyx3.png",example:["gupiao/价格中枢/看跌阴线/example3-1.png","gupiao/价格中枢/看跌阴线/example3-2.png","gupiao/价格中枢/看跌阴线/example3-3.png"],remark:"\n                        <div>止盈： 50%+ </div>\n                        <div>止损： 近期最低价 </div>\n                        <div>光头不光脚(可以有一点点上影线，最好没有)</div>\n                        <div>不能是锤头</div>\n                        <div>不一定是最高，但一定是在高位出现的</div>\n                        <div>第二周 阴线、阳线无所谓。出现即卖</div>\n                    "},{title:"看跌阴线4（个股，周线）",smallImg:"gupiao/价格中枢/看跌阴线/logo4.png",desc:"下跌后的筑底",mainImg:"gupiao/价格中枢/看跌阴线/kdyx4.png",example:["gupiao/价格中枢/看跌阴线/example4-1.png","gupiao/价格中枢/看跌阴线/example4-2.png","gupiao/价格中枢/看跌阴线/example4-3.png"],remark:"\n                        <div>止盈： 50%+ </div>\n                        <div>止损： 近期最低价 </div>\n                        <div>光头不光脚(可以有一点点上影线，最好没有)</div>\n                        <div>第二周 只能阳线</div>\n                        <div>周中买入（即确定后，周三、周四买入）</div>\n                    "},{title:"上涨诱空大阴线抄底（个股，日线）",smallImg:"gupiao/诱空抄底/logo.png",desc:"上涨途中的追涨抢跑",mainImg:"gupiao/诱空抄底/szjgcddwykdyx.png",example:["gupiao/诱空抄底/example.png","gupiao/诱空抄底/example2.png","gupiao/诱空抄底/example3.png","gupiao/诱空抄底/example4.png"],remark:'\n                        <div>大阴线吃掉的涨幅，可以是阳线也可以有阴线</div>\n                        <div>不是低位也可以，只要在上涨趋势中即可</div>\n                        <div style="color:#ff891b">主力操盘，成交量可以做假。但是只能放量做假</div>\n                    '},{title:"否极泰来",smallImg:"gupiao/否极泰来/logo.png",desc:"真正的底部模型",mainImg:"gupiao/否极泰来/pjtl.png",example:["gupiao/否极泰来/example1.png","gupiao/否极泰来/example2.png"],remark:"\n                        <div>A、C 也可以是阳线，只要 C 比 A 低</div>\n                        <div>B也可以是波动很大的横盘</div>\n                        <div>D只要是阳线，也可以是十字星</div>\n                    "},{title:"飞龙在天",smallImg:"gupiao/飞龙在天/logo.png",desc:"大盘好的时候用，超短期追涨停，80%胜率",mainImg:"gupiao/飞龙在天/flzt.png",remark:""},{title:"神龙摆尾-zero（个股，日线）",smallImg:"gupiao/神龙摆尾0/logo.png",desc:"急速下跌/熊市末期",mainImg:"gupiao/神龙摆尾0/slbw0.png",example:["gupiao/神龙摆尾0/example1.png","gupiao/神龙摆尾0/example2.png","gupiao/神龙摆尾0/example3.png"],remark:"\n                    "},{title:"神龙摆尾1（个股，日线）",smallImg:"gupiao/神龙摆尾1/logo.png",desc:"筑底后震荡的第一个涨停板",mainImg:"gupiao/神龙摆尾1/slbw1.png",example:["gupiao/神龙摆尾1/example1.png","gupiao/神龙摆尾1/example2.png","gupiao/神龙摆尾1/example2.png"],remark:"\n                        <div>盈利30% - 50%</div>\n                        <div>下影线可以扎破箱体，但实体一定不能</div>\n                        <div>V字型横盘也可以，但是不好</div>\n                        <div>止盈的50%是从第一个涨停板的收盘价开始算，而不是买入的开盘价</div>\n                    "},{title:"神龙摆尾2（个股，日线）",smallImg:"gupiao/神龙摆尾2/logo.png",desc:"筑底后震荡的第一个涨停板",mainImg:"gupiao/神龙摆尾2/slbw2.png",example:["gupiao/神龙摆尾2/example1.png","gupiao/神龙摆尾2/example2.png","gupiao/神龙摆尾2/example2.png"],remark:"\n                        <div>盈利30% - 50%</div>\n                        <div>k线的收盘价不能跌破涨停板的收盘价</div>\n                        <div>下影线可以刺穿</div>\n                        <div>如果是阴线，则任意位置(实体、影线)都不能跌破箱体</div>\n                        <div>成交量依次降低也可以，最好还是5和10的死叉</div>\n                    "},{title:"神龙摆尾3（个股，日线）",smallImg:"gupiao/神龙摆尾3/logo.png",desc:"筑底后震荡的第一个涨停板",mainImg:"gupiao/神龙摆尾3/slbw.png",example:["gupiao/神龙摆尾3/example1.png","gupiao/神龙摆尾3/example2.png","gupiao/神龙摆尾3/example3.png"],remark:"\n                        <div>振幅差不多5%即可</div>\n                        <div>最好出现在上涨初期</div>\n                        <div>卖点自己把握</div>\n                        <div>和神1区别就是不需要一个长周期的横盘后的涨停板</div>\n                    "},{title:"反客为主（个股，日线）",smallImg:"gupiao/反客为主/logo.png",desc:"上涨结构(*②)中的某个位置",mainImg:"gupiao/反客为主/fkww.png",example:["gupiao/反客为主/example1.png"]},{title:"峰回路转（个股，日线）",smallImg:"gupiao/峰回路转/logo.png",desc:"上涨结构的主力洗盘",mainImg:"gupiao/峰回路转/fhlz.png",example:["gupiao/峰回路转/example1.png"],remark:"\n                        <div>是在上涨结构中，而不是在上涨趋势中</div>\n                    "},{title:"以逸待劳（个股，日线）",smallImg:"gupiao/以逸待劳/logo.png",desc:"底部的主力洗盘",mainImg:"gupiao/以逸待劳/yydl.png",example:["gupiao/以逸待劳/example1.png","gupiao/以逸待劳/example2.png","gupiao/以逸待劳/example3.png"],remark:"\n                        <div>一定是下跌之后的上涨中</div>\n                        <div>第五日的只要是阳线就行。不管高开低开、放量缩量、真假都无所谓</div>\n                        <div>等待一个爆发，没有可继续等待</div>\n                    "},{title:"出水芙蓉（个股，日线）",smallImg:"gupiao/出水芙蓉/logo.png",desc:"主力低位洗盘模型，大盘比较弱的时候用",mainImg:"gupiao/出水芙蓉/csfr.png",example:["gupiao/出水芙蓉/example1.png","gupiao/出水芙蓉/example2.png","gupiao/出水芙蓉/example3.png"],remark:"\n                        <div>最好不要十字星</div>\n                    "},{title:"一箭双雕（个股，日线）",smallImg:"gupiao/一箭双雕/logo.png",desc:"中继加速模型，主力拉升前的洗盘",mainImg:"gupiao/一箭双雕/yjsd.png",example:["gupiao/一箭双雕/example1.png","gupiao/一箭双雕/example2.png","gupiao/一箭双雕/example3.png","gupiao/一箭双雕/example4.png","gupiao/一箭双雕/example5.png"],remark:"\n                        <div>缓慢上涨 到 急速拉升 的过渡点</div>\n                        <div>机会较少，盈利也会很多的。止盈自己把握，也可以使用推高止损的方式扩大盈利</div>\n                        <div>两个阴线最好是高开的(加分项，不是必需的)</div>\n                        <div>案例中的第一根阳线，可以不是很大</div>\n                    "},{title:"柳暗花明（个股，日线）",smallImg:"gupiao/柳暗花明/logo.png",desc:"底部反转模型，主力底部的强势洗盘",mainImg:"gupiao/柳暗花明/lahm.png",remark:"\n                        <div>出现以后，必然是底</div>\n                    "},{title:"葛式八法 - 买2（个股，周日线）",smallImg:"gupiao/葛式八法/logo2.png",mainImg:"gupiao/葛式八法/买2.png",example:["gupiao/葛式八法/example2-1.png","gupiao/葛式八法/example2-2.png"],remark:"\n                        <div></div>\n                    "},{title:"神奇均线（个股，日线）",smallImg:"gupiao/神奇均线/logo.png",mainImg:"gupiao/神奇均线/sqjx.png",example:["gupiao/神奇均线/example1.png","gupiao/神奇均线/example2.png"],remark:'\n                        <div><span style="color: #F4882F">快：5；</span><span style="color: #0096EF">中：13；</span><span style="color: #000">慢：34</span></div>\n                        <div style="font-size: 20px">A：</div>\n                        <div>k线允许跌破慢速均线</div>\n                        <div style="font-size: 20px">B：</div>\n                        <div>慢速均线、中速均线下穿快速均线后，无论谁上谁下</div>\n                    '},{title:"鱼跃龙门（个股，月线）",smallImg:"gupiao/鱼跃龙门/logo.png",mainImg:"gupiao/鱼跃龙门/yylm.png",example:["gupiao/鱼跃龙门/example1.png","gupiao/鱼跃龙门/example2.png"],remark:"\n                        <div>时间不确定，有可能3月，有可能半年以上</div>\n                        <div>不设止损</div>\n                    "},{title:"隔山打牛（个股，日线）",smallImg:"gupiao/隔山打牛/logo.png",desc:"上涨初期或中期",mainImg:"gupiao/隔山打牛/gsdn.png",example:["gupiao/隔山打牛/example1.png","gupiao/隔山打牛/example2.png"],remark:"\n                        <div>成交量不必依次降低</div>\n                    "},{title:"大有（个股，日线）",smallImg:"gupiao/大有/logo.png",desc:"上涨初期的洗盘模型（21/07/10 - 2:30）",mainImg:"gupiao/大有/dy.png",example:["gupiao/大有/example1.png","gupiao/大有/example2.png","gupiao/大有/example3.png"],remark:"\n                        <div>4连阳就是4个，3个不行，5个也不行</div>\n                        <div>最后的阳线最好不大</div>\n                    "}]}},computed:{getStyle:function(){return{width:"80px","margin-left":"10px !important","vertical-align":"middle"}}}},g=(e(743),e(30)),n=Object(g.a)(p,(function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("div",{staticClass:"gupiao-collapse"},[e("el-collapse",{model:{value:i.activeNames,callback:function(a){i.activeNames=a},expression:"activeNames"}},i._l(i.model,(function(a,p){return e("el-collapse-item",{attrs:{name:p}},[e("template",{staticClass:"collapse-title",slot:"title"},[e("span",[i._v(i._s(a.title))]),i._v(" "),a.smallImg?e("image-preview",{attrs:{imgUrl:a.smallImg,setStyle:i.getStyle}}):i._e()],1),i._v(" "),e("div",{staticClass:"gupiao-collapse--content"},[e("div",[e("div",{staticClass:"size16 title"},[i._v("说明：")]),i._v(" "),e("div",{staticClass:"red textIndent"},[i._v(i._s(a.desc))])]),i._v(" "),a.mainImg?e("div",[e("image-preview",{attrs:{imgUrl:a.mainImg}})],1):i._e(),i._v(" "),a.conditions?e("div",[e("div",{staticClass:"size16 title"},[i._v("条件：")]),i._v(" "),i._l(a.conditions,(function(a,p){return e("p",{staticClass:"textIndent"},[i._v(i._s(a))])}))],2):i._e(),i._v(" "),a.example?e("div",[e("div",{staticClass:"size16 title"},[i._v("例子：")]),i._v(" "),i._l(a.example,(function(i,a){return e("div",{staticClass:"margin50100 box1297e4"},[e("image-preview",{attrs:{imgUrl:i}})],1)}))],2):i._e(),i._v(" "),a.remark?e("div",[e("div",{staticClass:"size16 title"},[i._v("备注：")]),i._v(" "),e("div",{staticClass:"textIndent",domProps:{innerHTML:i._s(a.remark)}})]):i._e()])],2)})),1)],1)}),[],!1,null,"b8a7d4a8",null);a.default=n.exports}}]);