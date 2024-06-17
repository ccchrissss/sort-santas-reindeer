function sortReindeer(reindeerNames) {
  
  let reindeerNamesObjects = []

  for (let i = 0; i < reindeerNames.length; i++) {

    let currentName = reindeerNames[i].split(' ')
    // console.log(currentName)

    let name = new Object()
    name.firstName = currentName[0]
    name.lastName = currentName[1]
    // console.log(name)

    reindeerNamesObjects.push(name)
    // console.log(reindeerNamesObjects)

    reindeerNamesObjects.sort( (a, b) => {

      let nameA = a.lastName
      let nameB = b.lastName


      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
    // console.log(reindeerNamesObjects)
    
  }

  let sortedReindeerNames = []

  reindeerNamesObjects.forEach( e => {
    sortedReindeerNames.push( `${e.firstName} ${e.lastName}`)
  })

  return sortedReindeerNames
}

console.log(sortReindeer( ['Vixen Hall', 'Blitzen Claus', 'Rudolph Rednose'] ))


// parameters: reindeerNames    // an array of strings, each string containing a first and last name
// return: sortedNames    // the same array, sorted in alphabetical order by last name
// e.g. sortReindeer( ['Vixen Hall', 'Blitzen Claus', 'Rudolph Rednose'] )
// results in ['Blitzen Claus', 'Vixen Hall', 'Rudolph Rednose']


// create a variable reindeerNamesObjects and assign it to an empty array
// loop through reindeerNames, converting each element to an object with keys firstName and lastName, and adding these objects to reindeerNamesObjects
// sort reindeerNamesObjects by last name
// convert reindeerNamesObjects to an array of strings containing firstName lastName and assign it to a new variable called sortedReindeerNames
// return sortedReindeerNames