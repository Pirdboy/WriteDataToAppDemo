function testFunction()
{
	console.log('点击');
	if(document.execCommand('copy', false, null)) {
		console.log("copy success");
	} else {
		console.log('copy fail')
	}
}

function otherFunc()
{
	console.log('点击');
}

