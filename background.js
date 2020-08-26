function getProfessorPage(info,tab) {
    if (info.menuItemId !== 'rmpLC') {
        return;
    }
    var professorName = info.selectionText.replace(' ', '+');
    this.schoolName = this.schoolName.replace(' ', '+')
    var searchURL = 'http://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName='+this.schoolName+'&schoolID='+this.schoolID+'&query=' + professorName;
    chrome.tabs.create({url: searchURL});
}
var schoolID = '1367'; //1367 for Chabot College, 2352 for Las Positas College
var schoolName = 'Chabot College'; //Chabot College, Las Positas College
chrome.contextMenus.create({
    title: 'Search for %s on RMP', 
    contexts:['selection'], 
    id: 'rmpLC'
});
chrome.contextMenus.onClicked.addListener(getProfessorPage);

