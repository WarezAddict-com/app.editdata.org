var createElement = require('virtual-dom/create-element')
var dom = require('dom-events')
var test = require('tape')

var CreateColumn = require('../../elements/create-column')

test('CreateColumn returns a div element', function (t) {
  t.plan(1)

  var vnode = CreateColumn({})
  var element = createElement(vnode)
  t.equal(element.tagName, 'DIV')
})

test('CreateColumn execs `props.onsubmit(event, column)` on submit', function (t) {
  t.plan(2)

  var vnode = CreateColumn({
    onsubmit: function (event, column) {
      t.equal(column.name, 'foo')
      t.equal(column.type, 'number')
    }
  })

  var element = createElement(vnode)
  var nameInput = element.getElementsByTagName('input')[0]
  var typeSelect = element.getElementsByTagName('select')[0]
  var button = element.querySelector('.button-blue')

  nameInput.value = 'foo'
  typeSelect.selectedIndex = 1

  dom.emit(nameInput, 'change')
  dom.emit(typeSelect, 'change')
  dom.emit(button, 'click')
})
