const genId1 = require('yxrh_xid');
const genId2 = require('nisd_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|gwg7gPuiiI|' + genId2()).digest('base64');
}


module.exports = generateKey;
