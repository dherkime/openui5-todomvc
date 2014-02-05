jQuery.sap.registerModulePath("todo", "js/todo");
jQuery.sap.require("sap.ui.thirdparty.qunit");

test("Set, get, and delete via todo persistency", function() {
    var persister = new todo.TodoPersistency("foo");
    var dummy = {
        val : "val"
    };
    persister.set(dummy);
    var result = persister.get();
    persister.remove();
    equal(result.val, "val");
    equal(persister.isEmpty(), true);
});


jQuery.sap.require("sap.ui.thirdparty.sinon");

test("Create a single todo", function() {
    var ctrl = sap.ui.controller("todo.Todo");

    sinon.stub(ctrl, "getView").returns({
        // This is where we stub the view interface
        setModel : function() {
        },
        postMessage : function() {
        }
    });
    ctrl.onInit();
    ctrl.clearAllTodos();

    ctrl.createTodo("foo");
    var todos = ctrl.model.getProperty("/todos/");
    equal(todos.length, 1);
    equal(todos[0].done, false);
    equal(todos[0].text, "foo");
});

QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};