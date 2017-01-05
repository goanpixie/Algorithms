const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const fullNames= inventors.map(inventor =>`${inventor.first} ${inventor.last}`)
    console.log(fullNames)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered= inventors.sort((a,b) =>(a.year>b.year? 1:-1))
    console.table(ordered)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    const lived =inventors.reduce((total,inventor)=> {return total + (inventor.passed - inventor.year);
    },0);
    console.log(lived);

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort((a,b)=>{
      const firstguy= a.passed - a.year;
      const nextguy= b.passed -b.passed;
      return firstguy > nextguy ?-1:1;
    })

    console.table(oldest)