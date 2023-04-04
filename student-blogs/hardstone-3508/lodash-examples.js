import _ from "lodash";

//._gorupBy
const entriesByAuthor = _.groupBy(entries, "autor")
document.innerHTML=(entriesByAuthor)
console.log(entriesByAuthor);
console.log(entriesByAuthor["Pedro Gonzalez"])

// ._filter
const entriesFilteredByCssTag = _.fiter(entries, filterByCssTag)
console.log(entriesFilteredByCssTag);

function filterByCss3Tag(entry) {
    return _.includes(entry.tags, "CSS3")
}
const entriesFilteredByCss3Tag = _.filter(entries, filterByCss3Tag)
console.log(entriesFilteredByCss3Tag);

//._map
const entriesMappedByTittle = _.map(entries, "titulo")
console.log(entriesMappedByTittle);

//._order
const entriesOrderByDate = _.orderBy(entries, ["fecha", "titulo"], ["desc", "asc"])
console.log(entriesOrderByDate);

//._reduce
function countTags (acc, entry) {
    return acc + entry.tags.length 
}
const conuntEntriesTag = _.reduce(entries, countTags, 0)
console.log(conuntEntriesTag);

//merge
const entriesMerged = _.merge(entries[0], entries[1])
console.log(entriesMerged);

//pick
const pickedEntries = _.pick(entries[0], ["titulo", "tags"])
console.log(pickedEntries);

// varios
function mapFirtsTittle(entries) {
    return _.map (entries, "titulo")
}
const invertedTittle = _.mapValues(_.groupBy(entries, "autor"), mapFirtsTittle);
console.log(invertedTittle);

//ejercicio
function filterByTag(entry) {
    return _.includes(entry.tags, "Desarrollo")
}
function mapFirtTittle(entries) {
    return _.map(entries, "titulo")
}
const ejerFilterByTag = _.filter(entries, filterByTag)
const ejerMapedByTittle = _.map(ejerFilterByTag, "titulo")
const ejerGroupByAutor = _.groupBy(ejerMapedByTittle, "autor")
console.log(ejerGroupByAutor);

const ejerMapedByTittle2 = _.map(_.groupBy(entries, "autor"), mapFirtTittle);
console.log(ejerMapedByTittle);