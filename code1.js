gdjs.PlayingCode = {};
gdjs.PlayingCode.localVariables = [];
gdjs.PlayingCode.GDWalkSideObjects1= [];
gdjs.PlayingCode.GDWalkSideObjects2= [];
gdjs.PlayingCode.GDWalkSideObjects3= [];
gdjs.PlayingCode.GDUpRoadTileObjects1= [];
gdjs.PlayingCode.GDUpRoadTileObjects2= [];
gdjs.PlayingCode.GDUpRoadTileObjects3= [];
gdjs.PlayingCode.GDCarSpawnerObjects1= [];
gdjs.PlayingCode.GDCarSpawnerObjects2= [];
gdjs.PlayingCode.GDCarSpawnerObjects3= [];
gdjs.PlayingCode.GDGreyCarObjects1= [];
gdjs.PlayingCode.GDGreyCarObjects2= [];
gdjs.PlayingCode.GDGreyCarObjects3= [];
gdjs.PlayingCode.GDDownObjects1= [];
gdjs.PlayingCode.GDDownObjects2= [];
gdjs.PlayingCode.GDDownObjects3= [];
gdjs.PlayingCode.GDUpObjects1= [];
gdjs.PlayingCode.GDUpObjects2= [];
gdjs.PlayingCode.GDUpObjects3= [];
gdjs.PlayingCode.GDSpeedObjects1= [];
gdjs.PlayingCode.GDSpeedObjects2= [];
gdjs.PlayingCode.GDSpeedObjects3= [];
gdjs.PlayingCode.GDDistanceObjects1= [];
gdjs.PlayingCode.GDDistanceObjects2= [];
gdjs.PlayingCode.GDDistanceObjects3= [];
gdjs.PlayingCode.GDBottomRoadTileObjects1= [];
gdjs.PlayingCode.GDBottomRoadTileObjects2= [];
gdjs.PlayingCode.GDBottomRoadTileObjects3= [];
gdjs.PlayingCode.GDHitBoxObjects1= [];
gdjs.PlayingCode.GDHitBoxObjects2= [];
gdjs.PlayingCode.GDHitBoxObjects3= [];
gdjs.PlayingCode.GDBackGroundObjects1= [];
gdjs.PlayingCode.GDBackGroundObjects2= [];
gdjs.PlayingCode.GDBackGroundObjects3= [];
gdjs.PlayingCode.GDNewSpriteObjects1= [];
gdjs.PlayingCode.GDNewSpriteObjects2= [];
gdjs.PlayingCode.GDNewSpriteObjects3= [];
gdjs.PlayingCode.GDBannerObjects1= [];
gdjs.PlayingCode.GDBannerObjects2= [];
gdjs.PlayingCode.GDBannerObjects3= [];
gdjs.PlayingCode.GDBackGround_95952Objects1= [];
gdjs.PlayingCode.GDBackGround_95952Objects2= [];
gdjs.PlayingCode.GDBackGround_95952Objects3= [];
gdjs.PlayingCode.GDBackGround_95953Objects1= [];
gdjs.PlayingCode.GDBackGround_95953Objects2= [];
gdjs.PlayingCode.GDBackGround_95953Objects3= [];
gdjs.PlayingCode.GDRightObjects1= [];
gdjs.PlayingCode.GDRightObjects2= [];
gdjs.PlayingCode.GDRightObjects3= [];
gdjs.PlayingCode.GDLeftObjects1= [];
gdjs.PlayingCode.GDLeftObjects2= [];
gdjs.PlayingCode.GDLeftObjects3= [];
gdjs.PlayingCode.GDBonkIconObjects1= [];
gdjs.PlayingCode.GDBonkIconObjects2= [];
gdjs.PlayingCode.GDBonkIconObjects3= [];
gdjs.PlayingCode.GDRed_9595CarObjects1= [];
gdjs.PlayingCode.GDRed_9595CarObjects2= [];
gdjs.PlayingCode.GDRed_9595CarObjects3= [];
gdjs.PlayingCode.GDBlue_9595CarObjects1= [];
gdjs.PlayingCode.GDBlue_9595CarObjects2= [];
gdjs.PlayingCode.GDBlue_9595CarObjects3= [];
gdjs.PlayingCode.GDGreen_9595CarObjects1= [];
gdjs.PlayingCode.GDGreen_9595CarObjects2= [];
gdjs.PlayingCode.GDGreen_9595CarObjects3= [];
gdjs.PlayingCode.GDCatObjects1= [];
gdjs.PlayingCode.GDCatObjects2= [];
gdjs.PlayingCode.GDCatObjects3= [];
gdjs.PlayingCode.GDBonkObjects1= [];
gdjs.PlayingCode.GDBonkObjects2= [];
gdjs.PlayingCode.GDBonkObjects3= [];
gdjs.PlayingCode.GDDogeObjects1= [];
gdjs.PlayingCode.GDDogeObjects2= [];
gdjs.PlayingCode.GDDogeObjects3= [];
gdjs.PlayingCode.GDPepeObjects1= [];
gdjs.PlayingCode.GDPepeObjects2= [];
gdjs.PlayingCode.GDPepeObjects3= [];
gdjs.PlayingCode.GDShibaObjects1= [];
gdjs.PlayingCode.GDShibaObjects2= [];
gdjs.PlayingCode.GDShibaObjects3= [];


gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBonkObjects2Objects = Hashtable.newFrom({"Bonk": gdjs.PlayingCode.GDBonkObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDDogeObjects2Objects = Hashtable.newFrom({"Doge": gdjs.PlayingCode.GDDogeObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDPepeObjects2Objects = Hashtable.newFrom({"Pepe": gdjs.PlayingCode.GDPepeObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDShibaObjects1Objects = Hashtable.newFrom({"Shiba": gdjs.PlayingCode.GDShibaObjects1});
gdjs.PlayingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDBonkObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBonkObjects2Objects, 0, 284, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Resizable").setSize(141, 122);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDBonkObjects2[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDDogeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDDogeObjects2Objects, 0, 284, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Resizable").setSize(141, 122);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDDogeObjects2[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDPepeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDPepeObjects2Objects, 0, 284, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Resizable").setSize(141, 122);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDPepeObjects2[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDShibaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDShibaObjects1Objects, 0, 284, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Resizable").setSize(141, 122);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDShibaObjects1[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


};gdjs.PlayingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.PlayingCode.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Banner"), gdjs.PlayingCode.GDBannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomRoadTile"), gdjs.PlayingCode.GDBottomRoadTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("CarSpawner"), gdjs.PlayingCode.GDCarSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.PlayingCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpRoadTile"), gdjs.PlayingCode.GDUpRoadTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkSide"), gdjs.PlayingCode.GDWalkSideObjects1);
{for(var i = 0, len = gdjs.PlayingCode.GDUpRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDUpRoadTileObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 3);
}
for(var i = 0, len = gdjs.PlayingCode.GDWalkSideObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDWalkSideObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 3);
}
for(var i = 0, len = gdjs.PlayingCode.GDBottomRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBottomRoadTileObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 3);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDUpRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDUpRoadTileObjects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 3);
}
for(var i = 0, len = gdjs.PlayingCode.GDWalkSideObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDWalkSideObjects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 3);
}
for(var i = 0, len = gdjs.PlayingCode.GDBottomRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBottomRoadTileObjects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 3);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBannerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBannerObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getWidth()) :gdjs.PlayingCode.GDDogeObjects1[0].getWidth()) :gdjs.PlayingCode.GDPepeObjects1[0].getWidth()) :gdjs.PlayingCode.GDShibaObjects1[0].getWidth()) * 2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBannerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBannerObjects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].setXOffset((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) * 0.2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCarSpawnerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCarSpawnerObjects1[i].setX((( gdjs.PlayingCode.GDUpRoadTileObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDUpRoadTileObjects1[0].getAABBRight()));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects1[i].setZOrder((gdjs.PlayingCode.GDBonkObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects1[i].setZOrder((gdjs.PlayingCode.GDDogeObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects1[i].setZOrder((gdjs.PlayingCode.GDPepeObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects1[i].setZOrder((gdjs.PlayingCode.GDShibaObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setZOrder((gdjs.PlayingCode.GDCatObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setX((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("Cat")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("Cat")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("Cat")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("Cat")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setY((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointY("Cat")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointY("Cat")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointY("Cat")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointY("Cat")));
}
}}

}


};gdjs.PlayingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.PlayingCode.GDBonkObjects1, gdjs.PlayingCode.GDBonkObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDDogeObjects1, gdjs.PlayingCode.GDDogeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDPepeObjects1, gdjs.PlayingCode.GDPepeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDShibaObjects1, gdjs.PlayingCode.GDShibaObjects2);

{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDBonkObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDDogeObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDPepeObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDShibaObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBonkObjects1, gdjs.PlayingCode.GDBonkObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDDogeObjects1, gdjs.PlayingCode.GDDogeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDPepeObjects1, gdjs.PlayingCode.GDPepeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDShibaObjects1, gdjs.PlayingCode.GDShibaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects2 */
/* Reuse gdjs.PlayingCode.GDDogeObjects2 */
/* Reuse gdjs.PlayingCode.GDPepeObjects2 */
/* Reuse gdjs.PlayingCode.GDShibaObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBonkObjects1, gdjs.PlayingCode.GDBonkObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDDogeObjects1, gdjs.PlayingCode.GDDogeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDPepeObjects1, gdjs.PlayingCode.GDPepeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDShibaObjects1, gdjs.PlayingCode.GDShibaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.PlayingCode.GDUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDUpObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDUpObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDUpObjects2[k] = gdjs.PlayingCode.GDUpObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects2 */
/* Reuse gdjs.PlayingCode.GDDogeObjects2 */
/* Reuse gdjs.PlayingCode.GDPepeObjects2 */
/* Reuse gdjs.PlayingCode.GDShibaObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBonkObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDDogeObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDPepeObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDShibaObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBonkObjects1, gdjs.PlayingCode.GDBonkObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDDogeObjects1, gdjs.PlayingCode.GDDogeObjects2);

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.PlayingCode.GDDownObjects2);
gdjs.copyArray(gdjs.PlayingCode.GDPepeObjects1, gdjs.PlayingCode.GDPepeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDShibaObjects1, gdjs.PlayingCode.GDShibaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDownObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDownObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDownObjects2[k] = gdjs.PlayingCode.GDDownObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects2 */
/* Reuse gdjs.PlayingCode.GDDogeObjects2 */
/* Reuse gdjs.PlayingCode.GDPepeObjects2 */
/* Reuse gdjs.PlayingCode.GDShibaObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBonkObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDDogeObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDPepeObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDShibaObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBonkObjects1, gdjs.PlayingCode.GDBonkObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDDogeObjects1, gdjs.PlayingCode.GDDogeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDPepeObjects1, gdjs.PlayingCode.GDPepeObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDShibaObjects1, gdjs.PlayingCode.GDShibaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects2 */
/* Reuse gdjs.PlayingCode.GDDogeObjects2 */
/* Reuse gdjs.PlayingCode.GDPepeObjects2 */
/* Reuse gdjs.PlayingCode.GDShibaObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBonkObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDDogeObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDPepeObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDShibaObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

/* Reuse gdjs.PlayingCode.GDBonkObjects1 */
/* Reuse gdjs.PlayingCode.GDDogeObjects1 */
/* Reuse gdjs.PlayingCode.GDPepeObjects1 */
/* Reuse gdjs.PlayingCode.GDShibaObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects1[k] = gdjs.PlayingCode.GDBonkObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects1[k] = gdjs.PlayingCode.GDDogeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects1[k] = gdjs.PlayingCode.GDPepeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects1[k] = gdjs.PlayingCode.GDShibaObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects1[k] = gdjs.PlayingCode.GDBonkObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects1[k] = gdjs.PlayingCode.GDDogeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects1[k] = gdjs.PlayingCode.GDPepeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects1[k] = gdjs.PlayingCode.GDShibaObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects1 */
/* Reuse gdjs.PlayingCode.GDDogeObjects1 */
/* Reuse gdjs.PlayingCode.GDPepeObjects1 */
/* Reuse gdjs.PlayingCode.GDShibaObjects1 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBonkObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDDogeObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDPepeObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDShibaObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
}}

}


};gdjs.PlayingCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects1[k] = gdjs.PlayingCode.GDBonkObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects1[k] = gdjs.PlayingCode.GDDogeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects1[k] = gdjs.PlayingCode.GDPepeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects1[k] = gdjs.PlayingCode.GDShibaObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCarSpawnerObjects2Objects = Hashtable.newFrom({"CarSpawner": gdjs.PlayingCode.GDCarSpawnerObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarSpawning");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarSpawner"), gdjs.PlayingCode.GDCarSpawnerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCarSpawnerObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CarSpawning") > (600 / (gdjs.RuntimeObject.getVariableNumber(((gdjs.PlayingCode.GDShibaObjects2.length === 0 ) ? ((gdjs.PlayingCode.GDPepeObjects2.length === 0 ) ? ((gdjs.PlayingCode.GDDogeObjects2.length === 0 ) ? ((gdjs.PlayingCode.GDBonkObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayingCode.GDBonkObjects2[0].getVariables()) : gdjs.PlayingCode.GDDogeObjects2[0].getVariables()) : gdjs.PlayingCode.GDPepeObjects2[0].getVariables()) : gdjs.PlayingCode.GDShibaObjects2[0].getVariables()).get("CarSpeed"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDCarSpawnerObjects2 */
gdjs.PlayingCode.GDGreyCarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, (( gdjs.PlayingCode.GDCarSpawnerObjects2.length === 0 ) ? 0 :gdjs.PlayingCode.GDCarSpawnerObjects2[0].getPointX("")), (( gdjs.PlayingCode.GDCarSpawnerObjects2.length === 0 ) ? 0 :gdjs.PlayingCode.GDCarSpawnerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Resizable").setSize(141, 71);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].setZOrder((gdjs.PlayingCode.GDGreyCarObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].addForce(gdjs.randomInRange(100, 500), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarSpawning");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpRoadTile"), gdjs.PlayingCode.GDUpRoadTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects1[i].getX() < (( gdjs.PlayingCode.GDUpRoadTileObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDUpRoadTileObjects1[0].getX()) - 200 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects1[k] = gdjs.PlayingCode.GDGreyCarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects1 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBonkObjects2ObjectsGDgdjs_9546PlayingCode_9546GDDogeObjects2ObjectsGDgdjs_9546PlayingCode_9546GDPepeObjects2ObjectsGDgdjs_9546PlayingCode_9546GDShibaObjects2Objects = Hashtable.newFrom({"Bonk": gdjs.PlayingCode.GDBonkObjects2, "Doge": gdjs.PlayingCode.GDDogeObjects2, "Pepe": gdjs.PlayingCode.GDPepeObjects2, "Shiba": gdjs.PlayingCode.GDShibaObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.asyncCallback16943772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlayingCode.localVariables);
gdjs.PlayingCode.localVariables.length = 0;
}
gdjs.PlayingCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlayingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://dragon-game-stag.esollabs.com/v1/dragon-game/point/point", "{\"public_address\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "\", \"point\":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 10)) + ", \"is_evm\":" + "false" + " , \"id_game\":" + "3" + "}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.PlayingCode.asyncCallback16943772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayingCode.asyncCallback16944156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlayingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.PlayingCode.localVariables.length = 0;
}
gdjs.PlayingCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlayingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PlayingCode.asyncCallback16944156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayingCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16943548);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}
{ //Subevents
gdjs.PlayingCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.PlayingCode.GDBonkObjects1 */
/* Reuse gdjs.PlayingCode.GDDogeObjects1 */
/* Reuse gdjs.PlayingCode.GDPepeObjects1 */
/* Reuse gdjs.PlayingCode.GDShibaObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects1[k] = gdjs.PlayingCode.GDBonkObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects1[k] = gdjs.PlayingCode.GDDogeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects1[k] = gdjs.PlayingCode.GDPepeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects1[k] = gdjs.PlayingCode.GDShibaObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects2);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBonkObjects2ObjectsGDgdjs_9546PlayingCode_9546GDDogeObjects2ObjectsGDgdjs_9546PlayingCode_9546GDPepeObjects2ObjectsGDgdjs_9546PlayingCode_9546GDShibaObjects2Objects, gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects2[k] = gdjs.PlayingCode.GDBonkObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects2[k] = gdjs.PlayingCode.GDDogeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects2[k] = gdjs.PlayingCode.GDPepeObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects2[k] = gdjs.PlayingCode.GDShibaObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBonkObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.PlayingCode.GDCatObjects2);
/* Reuse gdjs.PlayingCode.GDDogeObjects2 */
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
/* Reuse gdjs.PlayingCode.GDPepeObjects2 */
/* Reuse gdjs.PlayingCode.GDShibaObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].returnVariable(gdjs.PlayingCode.GDBonkObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].returnVariable(gdjs.PlayingCode.GDDogeObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].returnVariable(gdjs.PlayingCode.GDPepeObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].returnVariable(gdjs.PlayingCode.GDShibaObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBonkObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBonkObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDDogeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDDogeObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDPepeObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDPepeObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDShibaObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDShibaObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBonkObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBonkObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBonkObjects1[k] = gdjs.PlayingCode.GDBonkObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBonkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDogeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDogeObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDogeObjects1[k] = gdjs.PlayingCode.GDDogeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDogeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDPepeObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDPepeObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDPepeObjects1[k] = gdjs.PlayingCode.GDPepeObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDPepeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDShibaObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDShibaObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDShibaObjects1[k] = gdjs.PlayingCode.GDShibaObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDShibaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}
{ //Subevents
gdjs.PlayingCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bonk"), gdjs.PlayingCode.GDBonkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Distance"), gdjs.PlayingCode.GDDistanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Doge"), gdjs.PlayingCode.GDDogeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pepe"), gdjs.PlayingCode.GDPepeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shiba"), gdjs.PlayingCode.GDShibaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.PlayingCode.GDSpeedObjects1);
{for(var i = 0, len = gdjs.PlayingCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDSpeedObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDDistanceObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDDistanceObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(Math.round((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) / 1000)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.PlayingCode.GDShibaObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDPepeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDDogeObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBonkObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDBonkObjects1[0].getPointX("")) :gdjs.PlayingCode.GDDogeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDPepeObjects1[0].getPointX("")) :gdjs.PlayingCode.GDShibaObjects1[0].getPointX("")) / 100);
}}

}


};gdjs.PlayingCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "71;88;111");
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "344480-Fiat500-Loop_05-Engine-HIGH_RPM-Steady-OTFA.wav", true, 100, 1);
}
{ //Subevents
gdjs.PlayingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayingCode.eventsList1(runtimeScene);
}


{


gdjs.PlayingCode.eventsList3(runtimeScene);
}


{


gdjs.PlayingCode.eventsList4(runtimeScene);
}


{


gdjs.PlayingCode.eventsList9(runtimeScene);
}


{


gdjs.PlayingCode.eventsList10(runtimeScene);
}


{



}


};

gdjs.PlayingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayingCode.GDWalkSideObjects1.length = 0;
gdjs.PlayingCode.GDWalkSideObjects2.length = 0;
gdjs.PlayingCode.GDWalkSideObjects3.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects1.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects2.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects3.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects1.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects2.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects3.length = 0;
gdjs.PlayingCode.GDGreyCarObjects1.length = 0;
gdjs.PlayingCode.GDGreyCarObjects2.length = 0;
gdjs.PlayingCode.GDGreyCarObjects3.length = 0;
gdjs.PlayingCode.GDDownObjects1.length = 0;
gdjs.PlayingCode.GDDownObjects2.length = 0;
gdjs.PlayingCode.GDDownObjects3.length = 0;
gdjs.PlayingCode.GDUpObjects1.length = 0;
gdjs.PlayingCode.GDUpObjects2.length = 0;
gdjs.PlayingCode.GDUpObjects3.length = 0;
gdjs.PlayingCode.GDSpeedObjects1.length = 0;
gdjs.PlayingCode.GDSpeedObjects2.length = 0;
gdjs.PlayingCode.GDSpeedObjects3.length = 0;
gdjs.PlayingCode.GDDistanceObjects1.length = 0;
gdjs.PlayingCode.GDDistanceObjects2.length = 0;
gdjs.PlayingCode.GDDistanceObjects3.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects1.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects2.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects3.length = 0;
gdjs.PlayingCode.GDHitBoxObjects1.length = 0;
gdjs.PlayingCode.GDHitBoxObjects2.length = 0;
gdjs.PlayingCode.GDHitBoxObjects3.length = 0;
gdjs.PlayingCode.GDBackGroundObjects1.length = 0;
gdjs.PlayingCode.GDBackGroundObjects2.length = 0;
gdjs.PlayingCode.GDBackGroundObjects3.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects1.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects2.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects3.length = 0;
gdjs.PlayingCode.GDBannerObjects1.length = 0;
gdjs.PlayingCode.GDBannerObjects2.length = 0;
gdjs.PlayingCode.GDBannerObjects3.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects1.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects2.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects3.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects1.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects2.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects3.length = 0;
gdjs.PlayingCode.GDRightObjects1.length = 0;
gdjs.PlayingCode.GDRightObjects2.length = 0;
gdjs.PlayingCode.GDRightObjects3.length = 0;
gdjs.PlayingCode.GDLeftObjects1.length = 0;
gdjs.PlayingCode.GDLeftObjects2.length = 0;
gdjs.PlayingCode.GDLeftObjects3.length = 0;
gdjs.PlayingCode.GDBonkIconObjects1.length = 0;
gdjs.PlayingCode.GDBonkIconObjects2.length = 0;
gdjs.PlayingCode.GDBonkIconObjects3.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDCatObjects1.length = 0;
gdjs.PlayingCode.GDCatObjects2.length = 0;
gdjs.PlayingCode.GDCatObjects3.length = 0;
gdjs.PlayingCode.GDBonkObjects1.length = 0;
gdjs.PlayingCode.GDBonkObjects2.length = 0;
gdjs.PlayingCode.GDBonkObjects3.length = 0;
gdjs.PlayingCode.GDDogeObjects1.length = 0;
gdjs.PlayingCode.GDDogeObjects2.length = 0;
gdjs.PlayingCode.GDDogeObjects3.length = 0;
gdjs.PlayingCode.GDPepeObjects1.length = 0;
gdjs.PlayingCode.GDPepeObjects2.length = 0;
gdjs.PlayingCode.GDPepeObjects3.length = 0;
gdjs.PlayingCode.GDShibaObjects1.length = 0;
gdjs.PlayingCode.GDShibaObjects2.length = 0;
gdjs.PlayingCode.GDShibaObjects3.length = 0;

gdjs.PlayingCode.eventsList11(runtimeScene);

return;

}

gdjs['PlayingCode'] = gdjs.PlayingCode;
