document.getElementById('issueInputForm').addEventListener('submit')

function fetchIssues () {
    let issues = JSON.parse(localStorage.getItem('issues'))
    let issuesList = document.getElementByid('issuesList')

    issuesList.innerHTML = '';

    for (let i=0; i < issues.length; i++) {
        let id = issues[i].id
        let subject = issues[i].subject
        let description = issues[i].description
        let severity = issues[i].severity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status
        let statusColor = status == "Closed" ? 'label-success' : 'label-info'

        // issuesList.innerHTML +=
    }
}

function saveIssue(e) {
    let issueId = chance.guid()
    let issueSubject = document.getElementById('issuesSubjectInput').value
    let issueDesc = document.getElementById('issuesDesnInput').value
    let issueSeverity = document.getElementById('issuesSeverityInput').value
    let issueAssignedTo = document.getElementById('issuesAssignedToInput').value
    let issueStatus = 'Open'

    let issue = {
        id: issueId, 
        subject: issueSubject, 
        description: issueDesc, 
        severity: issueSeverity, 
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if(localStorage.getItem('issues')===null){
        let issues = []
        issues.push(issue)
        localStorage.setItem('issues', JSON.stringify(issues))
    }else{
        let issues = JSON.parse(localStorage.getItem('issues'))
        issues.push(issue)
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues()

    e.preventDefault()
}