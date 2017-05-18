// returns [0, 1, ..., N-1]
// range(5); // [0, 1, 2, 3, 4]
function range(N) {
 var list = [];
 for (var i = 0; i < N; i++) { list.push(i); }
 return list;
};

// convert implicit function arguments array to a fully featured array
function argsToArray(args) {
 var list = [];
 for (var i = 0; i < args.length; i++) { list.push(args[i]); }
 return list;
};

// merge input arrays into single array
// zip(range(4), "CATSARECUTE", "atest"); // [[0,"C","a"], [1,"A","t"], [2,"T","e"], [3,"S","s"]]
function zip() {
 var arrs = argsToArray(arguments);
 var arrLengths = arrs.map(function (a) { return a.length; });
 var zipLength = Math.min.apply(null, arrLengths);
 return range(zipLength).map(function (i) {
  return arrs.map(function (a) { return a[i]; });
 });
};
