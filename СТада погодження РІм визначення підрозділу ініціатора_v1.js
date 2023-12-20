function onChangeTypRIM() {
  var typRIM = EdocsApi.getAttributeValue("TypRIM");
  var rIMOther = EdocsApi.getAttributeValue("RIMOther");
  if (typRIM.text === `ч. Інше`) {
    EdocsApi.setControlProperties({ code: "RIMOther", hidden: false, disabled: false, required: true });
  } else {
    EdocsApi.setControlProperties({ code: "RIMOther", hidden: true, disabled: false, required: false });
    rIMOther.value = null;
    rIMOther.text = null;
    safeChangAttr(rIMOther);
  }
}
function onChangetime_year() {
  var typtime_year = EdocsApi.getAttributeValue("time_year");
  var RIMValidUntil = EdocsApi.getAttributeValue("RIMValidUntil");
  //var TimeSet = EdocsApi.getAttributeValue('TimeSet');
  if (typtime_year.value === `Інше`) {
    EdocsApi.setControlProperties({ code: "RIMValidUntil", hidden: false, disabled: false, required: true });
    //EdocsApi.setControlProperties({code: 'TimeSet', hidden: false, disabled: false, required: true});
  } else {
    EdocsApi.setControlProperties({ code: "RIMValidUntil", hidden: false, disabled: true, required: false });
    //EdocsApi.setControlProperties({code: 'TimeSet', hidden: true, disabled: false, required: false});
    RIMValidUntil.value = null;
    RIMValidUntil.text = null;
    //TimeSet.value = null;
    //  TimeSet.text = null;
    safeChangAttr(RIMValidUntil);
    //safeChangAttr(TimeSet);
  }
}

function safeChangAttr(attr) {
  if (CurrentDocument.isDraft) {
    EdocsApi.setAttributeValue(attr);
  }
}
/*function clearAttribute( doNotClearOnInit) { //очищення
    //debugger;
    if (doNotClearOnInit) {
        return;
    }
*/

function onCardInitialize() {
  debugger;
  //onChangeTypRIM();
  onChangeRIMCategory();
  //onChangetime_year();
  onTaskExecuteDataRIM();
  MedRadStateinProgress();
  //onChangeControlExample();
  onChangeTypRIM();
  onChangeBrendChois(true);
}
/*  Визначити керівника співробітника (код Responsible) та записати в поле системний атрибут Співробітник (HeadManager ) */
/*function onChangeResponsible() {
    var responsible = EdocsApi.getAttributeValue('Responsible');
    var headManager = EdocsApi.getAttributeValue('HeadManager');
    if (responsible && responsible.value) {
        var tempHeadMan = EdocsApi.getEmployeeManagerByEmployeeID(responsible.value, 0);
        headManager.value = (tempHeadMan.employeeId).toString();
        // headManager.text = tempHeadMan.shortName;
    } else {
        headManager.value = null;
        headManager.text = null;
    }
    safeChangAttr(headManager);
}
function safeChangAttr(attr) {
    if (CurrentDocument.isDraft) {
        EdocsApi.setAttributeValue(attr);
    }
}

/*  Якщо в полі - Чек-бокс ( код ControlExample) вибрано "true"
То поле (код eDocsCaseStatus) стає обов'язковим для заповнення*/
/*function onChangeControlExample() {
    var controlExample = EdocsApi.getAttributeValue('ControlExample');
    var eDocsCaseStat = EdocsApi.getAttributeValue('eDocsCaseStatus');
    if(controlExample.value == 'true')
    {
        EdocsApi.setControlProperties({code: 'eDocsCaseStatus', hidden: false, disabled: false, required: true});
    }
    else {
        EdocsApi.setControlProperties({code: 'eDocsCaseStatus', hidden: true, disabled: false, required: false});
        eDocsCaseStat.value = null;
        eDocsCaseStat.text = null;
    }
    safeChangAttr(eDocsCaseStat);
}
*/

function onCardPrint(params) {
  params.templateCode = "0407";

  var resolutions = EdocsApi.getResolutions();

  params.attributes.IDdoc = EdocsApi.getAttributeValue("IDdoc").value;
  params.attributes.NameOrganization = EdocsApi.getAttributeValue("NameOrganization").value;
  params.attributes.RIMCategory = EdocsApi.getAttributeValue("RIMCategory").value;
  params.attributes.RIMCategoryOther = EdocsApi.getAttributeValue("RIMCategoryOther").value;
  params.attributes.RIMTargetAudience = EdocsApi.getAttributeValue("RIMTargetAudience").value;
  params.attributes.RIMMaterialNumber = EdocsApi.getAttributeValue("RIMMaterialNumber").value;
  params.attributes.RegNumber = EdocsApi.getAttributeValue("RegNumber").value;
  params.attributes.RegDate = EdocsApi.getAttributeValue("RegDate").value;
  params.attributes.RIMValidUntil = moment(EdocsApi.getAttributeValue("RIMValidUntil").value).format("DD.MM.YYYY");
  params.attributes.RIMValidUntil1 = moment(EdocsApi.getAttributeValue("RIMValidUntil1").value).format("DD.MM.YYYY");
  params.attributes.TypRIM = EdocsApi.getAttributeValue("TypRIM").text;
  params.attributes.RIMOther = EdocsApi.getAttributeValue("RIMOther").value;
  params.attributes.RIMMaterialName = EdocsApi.getAttributeValue("RIMMaterialName").value;
  params.attributes.Description = EdocsApi.getAttributeValue("Description").value;
  params.attributes.Employee = EdocsApi.getAttributeValue("Employee").text;
  params.attributes.DepartmentHead = EdocsApi.getAttributeValue("DepartmentHead").text;
  params.attributes.Responsible = EdocsApi.getAttributeValue("Responsible").text;
  params.attributes.ArchiveDataName = EdocsApi.getAttributeValue("ArchiveDataName").value;
  params.attributes.RegPeriod2_maket_arhiv = moment(EdocsApi.getAttributeValue("RegPeriod2_maket_arhiv").value).format("DD.MM.YYYY");
  params.attributes.Regperiod1 = moment(EdocsApi.getAttributeValue("Regperiod1").value).format("DD.MM.YYYY");
  params.attributes.Comment = EdocsApi.getAttributeValue("Comment").value;
  params.attributes.data_original = EdocsApi.getAttributeValue("data_original").value;
  params.attributes.ProtocolNumber = EdocsApi.getAttributeValue("ProtocolNumber").value;
  params.attributes.Data_scancopy = EdocsApi.getAttributeValue("Data_scancopy").value;
  params.attributes.Delete_arhiv = EdocsApi.getAttributeValue("Delete_arhiv").value;
  params.attributes.АctingComment = EdocsApi.getAttributeValue("АctingComment").value;
  params.attributes.RIMTradeMark = EdocsApi.getAttributeValue("RIMTradeMark").text;
  params.attributes.recept = EdocsApi.getAttributeValue("recept").value;
  params.attributes.brend2 = EdocsApi.getAttributeValue("brend2").value;
  params.attributes.StatusRim = EdocsApi.getAttributeValue("StatusRim").value;
  params.attributes.Status_coment_Pim = EdocsApi.getAttributeValue("Status_coment_Pim").value;
  params.attributes.people_recivd = EdocsApi.getAttributeValue("people_recivd").text;
  params.attributes.Med_PIM = EdocsApi.getAttributeValue("Med_PIM").text;
  params.attributes.DataRim = moment(EdocsApi.getAttributeValue("DataRim").value).format("DD.MM.YYYY");
  params.attributes.time_year = EdocsApi.getAttributeValue("time_year").value;
  params.attributes.TimeSet = moment(EdocsApi.getAttributeValue("TimeSet").value).format("DD.MM.YYYY");
}
function onChangeRIMCategory() {
  var RIMCategory = EdocsApi.getAttributeValue("RIMCategory");
  var RIMCategoryOther = EdocsApi.getAttributeValue("RIMCategoryOther");
  if (RIMCategory.value === `Інше`) {
    EdocsApi.setControlProperties({ code: "RIMCategoryOther", hidden: false, disabled: false, required: true });
  } else {
    EdocsApi.setControlProperties({ code: "RIMCategoryOther", hidden: true, disabled: false, required: false });
    RIMCategoryOther.value = null;
    RIMCategoryOther.text = null;
    safeChangAttr(RIMCategoryOther);
  }
}
function onChangerecept() {
  var recept = EdocsApi.getAttributeValue("recept");
  var viddil = EdocsApi.getAttributeValue("Viddil");
  if (recept && recept.value) {
    if (recept.value == `Безрецептурні препарати`) {
      viddil.value = "44";
      viddil.text = "Відділ з регуляторної діяльності напрямку безрецептурних препаратів";
    } else if (recept.value == `Рецептурні препарати`) {
      viddil.value = "45";
      viddil.text = "Відділ з регуляторної діяльності напрямку рецептурних препаратів";
    }
  } else {
    viddil.value = null;
    viddil.text = null;
  }
  safeChangAttr(viddil);
}

function safeChangAttr(attr) {
  if (CurrentDocument.isDraft) {
    EdocsApi.setAttributeValue(attr);
  }
}

function onTaskExecuteStage(routeStage) {
  var time_year = EdocsApi.getAttributeValue("time_year");
  var regDate = EdocsApi.getAttributeValue("RegDate");
  var rIMValidUntil = EdocsApi.getAttributeValue("RIMValidUntil");
  if ((regDate && regDate.value && time_year.value == "2") || time_year.value == "5") {
    EdocsApi.setControlProperties({ code: "RIMValidUntil", hidden: false, disabled: true, required: true });
    var date = new Date(regDate.value).toUTCString();
    var num = parseInt(time_year.value, 10);
    var tmDate = new Date(new Date(date).setFullYear(new Date(date).getFullYear() + num));
    rIMValidUntil.value = tmDate;
  }
  EdocsApi.setAttributeValue(rIMValidUntil);
}

function safeChangAttr(attr) {
  if (CurrentDocument.isDraft) {
    EdocsApi.setAttributeValue(attr);
  }
}

function MedRadStateinProgress() {
  debugger;
  var Viddil = EdocsApi.getAttributeValue("Viddil");
  var MedRad = EdocsApi.getCaseTaskDataByCode("MedRad" + Viddil.value);
  if (MedRad) {
    if ((MedRad.coExecutorId == CurrentUser.employeeId || MedRad.executorId == CurrentUser.employeeId) && MedRad.executionState == "inProgress") {
      EdocsApi.setControlProperties({ code: "AgreeRim", hidden: false, disabled: false, required: true });
      EdocsApi.setControlProperties({ code: "Med_PIM", hidden: false, disabled: false, required: true });
      //  EdocsApi.setControlProperties({code: 'eDocsCaseStatus', hidden: false, disabled: false, required: false});
    } else {
      EdocsApi.setControlProperties({ code: "AgreeRim", hidden: false, disabled: true, required: false });
      EdocsApi.setControlProperties({ code: "Med_PIM", hidden: false, disabled: true, required: false });
      //EdocsApi.setControlProperties({code: 'eDocsCaseStatus', hidden: false, disabled: false, required: false});
    }
  }
}

function onTaskExecuteDataRIM() {
  var DataRIM = EdocsApi.getCaseTaskDataByCode("DataRIM");

  if (DataRIM) {
    if (DataRIM.state == "inProgress") {
      EdocsApi.setControlProperties({ code: "DataRim", hidden: false, disabled: false, required: true });
      EdocsApi.setControlProperties({ code: "people_recivd", hidden: false, disabled: false, required: true });
      EdocsApi.setControlProperties({ code: "StatusRim", hidden: false, disabled: false, required: true });
      EdocsApi.setControlProperties({ code: "Status_coment_Pim", hidden: false, disabled: false, required: false });
      //   EdocsApi.setControlProperties({code: 'ControlExample', hidden: false, disabled: false, required: true});
      EdocsApi.setControlProperties({ code: "eDocsCaseStatus", hidden: false, disabled: false, required: true });
      EdocsApi.setControlProperties({ code: "RIMValidUntil1", hidden: false, disabled: false, required: true });
      onChangeStatusRim();
    } else {
      EdocsApi.setControlProperties({ code: "DataRim", hidden: false, disabled: true, required: false });
      EdocsApi.setControlProperties({ code: "people_recivd", hidden: false, disabled: true, required: false });
      EdocsApi.setControlProperties({ code: "StatusRim", hidden: false, disabled: true, required: false });
      EdocsApi.setControlProperties({ code: "Status_coment_Pim", hidden: false, disabled: true, required: false });
      // EdocsApi.setControlProperties({code: 'ControlExample', hidden: false, disabled: true, required: false});
      EdocsApi.setControlProperties({ code: "eDocsCaseStatus", hidden: false, disabled: true, required: false });
      EdocsApi.setControlProperties({ code: "RIMValidUntil1", hidden: false, disabled: true, required: false });
    }
  }
}
//Розрахунок номративного сроку
function onChangeRIMValidUntil1() {
  var time_year = EdocsApi.getAttributeValue("time_year");
  if (time_year && time_year.value) {
    var date = new Date(EdocsApi.getAttributeValue("RIMValidUntil1").value);
    date.setDate(1);
    date.setMonth(0);
    date.setFullYear(time_year.value == 5 ? date.getFullYear() + 6 : date.getFullYear() + 4);

    EdocsApi.setAttributeValue({ code: "Regperiod1", value: date.toISOString(), text: null });
  } else {
    EdocsApi.message("Оберіть значення ...");
  }
}
//обовязковість поля Розміщення РІМ
function onChangeStatusRim() {
  var StatusRim = EdocsApi.getAttributeValue("StatusRim");
  var eDocsCaseStatus = EdocsApi.getAttributeValue("eDocsCaseStatus");
  if (StatusRim.value == `Прийнято`) {
    EdocsApi.setControlProperties({ code: "eDocsCaseStatus", hidden: false, disabled: false, required: true });
  } else {
    EdocsApi.setControlProperties({ code: "eDocsCaseStatus", hidden: false, disabled: false, required: false });
    eDocsCaseStatus.value = null;
    eDocsCaseStatus.text = null;
    safeChangAttr(eDocsCaseStatus);
  }
}
/*  Якщо в полі - Чек-бокс ( код BrendChois) вибрано "true"
То поле (код Brend2) стає обов'язковим для заповнення і видимим*/
function onChangeBrendChois(doNotClearOnInit) {
  var brendChois = EdocsApi.getAttributeValue("BrendChois");
  var brend2 = EdocsApi.getAttributeValue("brend2");
  var RIMTradeMark = EdocsApi.getAttributeValue("RIMTradeMark");
  if (brendChois.value == "true") {
    EdocsApi.setControlProperties({ code: "brend2", hidden: false, required: true });
    EdocsApi.setControlProperties({ code: "RIMTradeMark", hidden: true, required: false });
  } else {
    EdocsApi.setControlProperties({ code: "brend2", hidden: true, required: false });
    EdocsApi.setControlProperties({ code: "RIMTradeMark", hidden: false, required: true });
    clearAttribute("brend2", doNotClearOnInit);
    clearAttribute("RIMTradeMark", doNotClearOnInit);
  }
}
function clearAttribute(attributeCode, doNotClearOnInit) {
  //очищення
  //debugger;
  if (doNotClearOnInit) {
    return;
  }
  EdocsApi.setAttributeValue({ code: attributeCode, value: null, text: null });
}

function setViddil() {
  switch (EdocsApi.findEmployeeSubdivisionByLevelAndEmployeeID(CurrentUser.employeeId, 2)?.extId) {
    case "19":
      EdocsApi.setAttributeValue({ code: "Viddil", value: "Generic", text: null });
      break;
    case "18":
      EdocsApi.setAttributeValue({ code: "Viddil", value: "СНС", text: null });
      break;
  }
}

function onCreate() {
  setViddil();
}
