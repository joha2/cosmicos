var CosmicDrive = require('CosmicDrive');
var cosmicos = new CosmicDrive({
    'primer': false,
    'txt': false
});

var all = cosmicos.get_message();
var primer = [];
var primer2 = [];

var cline = 0;
for (var i=0; i<all.length; i++) {
    var part = all[i];
    if (part.role != "code") continue;
    var op = part.lines.join("\n");
    var v = cosmicos.text_to_list(op);
    console.log(JSON.stringify(v));
    primer.push(v);
    primer2.push(cosmicos.text_to_list_int(op));
    cline++;
}

var fs = require('fs');
fs.writeFileSync("primer.json", JSON.stringify(primer, null, 2));
fs.writeFileSync("primer2.json", JSON.stringify(primer2, null, 2));
