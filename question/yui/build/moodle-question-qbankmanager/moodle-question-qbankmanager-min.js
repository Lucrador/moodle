YUI.add("moodle-question-qbankmanager",function(e,t){var n={_header:null,_firstCheckboxId:null,init:function(t){this._header=e.one("#qbheadercheckbox"),this._header.setAttrs({disabled:!1,title:M.util.get_string("selectall","moodle")}),this._header.on("click",this._headerClick,this),this._firstCheckboxId=t},_headerClick:function(){var t=e.one("#categoryquestions").all("[type=checkbox],[type=radio]");firstCheckbox=e.one("#"+this._firstCheckboxId),firstCheckbox.get("checked")?(t.set("checked",!1),this._header.setAttribute("title",M.util.get_string("selectall","moodle"))):(t.set("checked",!0),this._header.setAttribute("title",M.util.get_string("deselectall","moodle"))),this._header.set("checked",!1)}};M.question=M.question||{},M.question.qbankmanager=M.question.qbankmanager||n},"@VERSION@",{requires:["node","selector-css3"]});