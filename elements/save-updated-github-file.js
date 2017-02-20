var h = require('virtual-dom/h')

module.exports = SaveGitHubFile

function SaveGitHubFile (props) {
  var actions = props.actions
  var saveData = props.file.saveData

  var saveUpdatedGithubFile = actions.saveUpdatedGithubFile
  var modal = actions.modal

  var type = require('../lib/accept-file')(saveData.location.path)
  if (type instanceof Error) {
    return h('div', type.message)
  }

  var message = ''

  var helpText = [
    'File ' + saveData.location.path,
    'will be updated in ' + saveData.owner + '/' + saveData.repo,
    'in branch ' + saveData.branch
  ].join(' ')

  return ('div', [
    h('h1', 'Update ' + saveData.location.path + ' in GitHub repository'),
    h('h2', 'Add a commit message:'),
    h('input.text-input', {
      type: 'text',
      value: message,
      oninput: function (e) {
        message = e.target.value
      }
    }),
    h('button.button-blue', {
      onclick: function (e) {
        e.preventDefault()
        saveUpdatedGithubFile(message)
        modal('saveNewFileToGithub', false)
      }
    }, 'Save to GitHub'),
    h('p.help', helpText)
  ])
}
