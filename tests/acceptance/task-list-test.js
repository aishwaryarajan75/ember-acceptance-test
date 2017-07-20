import { test } from 'qunit';
import moduleForAcceptance from 'ember-acceptance-tests/tests/helpers/module-for-acceptance';
moduleForAcceptance('Acceptance | task list');
test('count the number of tasks', function(assert){
    visit('/');
	andThen(function(){
    var tasks=find('.task-list .task');
    assert.equal(tasks.length,3);
	});
 });