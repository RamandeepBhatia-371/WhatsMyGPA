angular.module('Universities', [])

.factory('UniversityList', function() {
    var gpa={
        name: "GPA",
        example: "2.1, 4.0",
        type: "number",
        min: 0,
        max: 4
    };

    return {
        /*Based from:
            http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
        */
        universityofwaterloo: {
            name: 'University Of Waterloo',
            location: {
                city: "Waterloo",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0.25, 0.5, 0.75, 0.80, 1],
            gradeConversions: {
                gpa: gpa,
            	"percentage": {
                    name: "Percentage",
                    example: "75%, 67%",
                    type: "number",
                    min: 0,
                    max: 100,
                    gpaConversion: [{
                        value: 4,
                        min: 90,
                        max: 100
                    }, {
                        value: 3.9,
                        min: 85,
                        max: 89
                    }, {
                        value: 3.7,
                        min: 80,
                        max: 84
                    }, {
                        value: 3.3,
                        min: 77,
                        max: 79
                    }, {
                        value: 3,
                        min: 73,
                        max: 76
                    }, {
                        value: 2.7,
                        min: 70,
                        max: 72
                    }, {
                        value: 2.3,
                        min: 67,
                        max: 69
                    }, {
                        value: 2,
                        min: 63,
                        max: 66
                    }, {
                        value: 1.7,
                        min: 60,
                        max: 62
                    }, {
                        value: 1.3,
                        min: 57,
                        max: 59
                    }, {
                        value: 1,
                        min: 53,
                        max: 55
                    }, {
                        value: 0.7,
                        min: 50,
                        max: 52
                    }, {
                        value: 0,
                        min: 0,
                        max: 49
                    }]
                }, 
                "letter":{
                    name: "Letter",
                    example:"B, A+",
                    type: "letter",
                    gpaConversion: [{
                        value: 4,
                        letters: ['A+']
                    }, {
                        value: 3.9,
                        letters: ['A']
                    }, {
                        value: 3.7,
                        letters: ['A-']
                    }, {
                        value: 3.3,
                        letters: ['B+']
                    }, {
                        value: 3,
                        letters: ['B']
                    }, {
                        value: 2.7,
                        letters: ['B-']
                    }, {
                        value: 2.3,
                        letters: ['C+']
                    }, {
                        value: 2,
                        letters: ['C']
                    }, {
                        value: 1.7,
                        letters: ['C-']
                    }, {
                        value: 1.3,
                        letters: ['D+']
                    }, {
                        value: 1,
                        letters: ['D']
                    }, {
                        value: 0.7,
                        letters: ['D-']
                    }, {
                        value: 0,
                        letters: ['E', 'F']
                    }]
                }
            }
        },
        /*Based from:
            https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf
        */
        universityoftoronto: {
            name: 'University Of Toronto',
            location: {
                city: "Toronto",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0,0.5,1],
           	gradeConversions: {
                gpa: gpa,
            	"percentage": {
                    name: "Percentage",
                    example: "75%, 67%",
                    type: "number",
                    min: 0,
                    max: 100,
                    gpaConversion: [{
                        value: 4,
                        min: 85,
                        max: 100
                    }, {
                        value: 3.7,
                        min: 80,
                        max: 84
                    }, {
                        value: 3.3,
                        min: 77,
                        max: 79
                    }, {
                        value: 3,
                        min: 73,
                        max: 76
                    }, {
                        value: 2.7,
                        min: 70,
                        max: 72
                    }, {
                        value: 2.3,
                        min: 67,
                        max: 69
                    }, {
                        value: 2,
                        min: 63,
                        max: 66
                    }, {
                        value: 1.7,
                        min: 60,
                        max: 62
                    }, {
                        value: 1.3,
                        min: 57,
                        max: 59
                    }, {
                        value: 1,
                        min: 53,
                        max: 56
                    }, {
                        value: 0.7,
                        min: 50,
                        max: 52
                    }, {
                        value: 0,
                        min: 0,
                        max: 49
                    }]
                }, 
                "letter":{
                    name: "Letter",
                    example:"B, A+",
                    type: "letter",
                    gpaConversion: [{
                        value: 4,
                        letters: ['A+','A']
                    }, {
                        value: 3.7,
                        letters: ['A-']
                    }, {
                        value: 3.3,
                        letters: ['B+']
                    }, {
                        value: 3,
                        letters: ['B']
                    }, {
                        value: 2.7,
                        letters: ['B-']
                    }, {
                        value: 2.3,
                        letters: ['C+']
                    }, {
                        value: 2,
                        letters: ['C']
                    }, {
                        value: 1.7,
                        letters: ['C-']
                    }, {
                        value: 1.3,
                        letters: ['D+']
                    }, {
                        value: 1,
                        letters: ['D']
                    }, {
                        value: 0.7,
                        letters: ['D-']
                    }, {
                        value: 0,
                        letters: ['F','E', 'NC']
                    }]
                }
            }
        },
        /*Based from:
           http://laps.yorku.ca/student-resources/gpa-calculator/
           ^^ That calculator isnt accurate as it treats E as a 0 in a 9 point conversion even though the chart on the same website lists it should be a 1
           Also used http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html for gpa conversions
           and http://calendars.registrar.yorku.ca/2013-2014/academic/grades/ for percentage conversions
        */
        yorkuniversity: {
            name: 'York University',
            location: {
                city: "Toronto",
                state: "Ontario",
                country: "Canada"
            },
            commonCreditWeights: [0,1,1.5,2,3,4,5,6,9,12],
            gradeConversions: {
                gpa: gpa,
                "letter":{
                    name: "Letter",
                    example:"B, A+",
                    type: "letter",
                    gpaConversion: [{
                        value: 4,
                        letters: ['A+']
                    }, {
                        value: 3.8,
                        letters: ['A']
                    },{
                        value: 3.3,
                        letters: ['B+']
                    }, {
                        value: 3,
                        letters: ['B']
                    }, {
                        value: 2.3,
                        letters: ['C+']
                    }, {
                        value: 2,
                        letters: ['C']
                    }, {
                        value: 1.3,
                        letters: ['D+']
                    }, {
                        value: 1,
                        letters: ['D']
                    }, {
                        value: 0.7,
                        letters: ['E']
                    },{
                        value: 0,
                        letters: ['F','NC']
                    }]
                },
                "point9": {
                    name: "9-Point",
                    example: "5, 9",
                    type: "number",
                    min: 0,
                    max: 9,
                    gpaConversion: [{
                        value: 4,
                        min: 9,
                        max: 9
                    }, {
                        value: 3.8,
                        min: 8,
                        max: 8
                    }, {
                        value: 3.3,
                        min: 7,
                        max: 7
                    }, {
                        value: 3,
                        min: 6,
                        max: 6
                    }, {
                        value: 2.3,
                        min: 5,
                        max: 5
                    }, {
                        value: 2,
                        min: 4,
                        max: 4
                    }, {
                        value: 1.3,
                        min: 3,
                        max: 3
                    }, {
                        value: 1,
                        min: 2,
                        max: 2
                    }, {
                        value: 0.7,
                        min: 1,
                        max: 1
                    }, {
                        value: 0,
                        min: 0,
                        max: 0
                    }]
                },
                "percentage": {
                    name: "Percentage",
                    example: "75%, 67%",
                    type: "number",
                    min: 0,
                    max: 100,
                    gpaConversion: [{
                        value: 4,
                        min: 90,
                        max: 100
                    }, {
                        value: 3.8,
                        min: 80,
                        max: 89
                    }, {
                        value: 3.3,
                        min: 75,
                        max: 79
                    }, {
                        value: 3,
                        min: 70,
                        max: 74
                    }, {
                        value: 2.3,
                        min: 65,
                        max: 69
                    }, {
                        value: 2,
                        min: 60,
                        max: 64
                    }, {
                        value: 1.3,
                        min: 55,
                        max: 59
                    }, {
                        value: 1,
                        min: 50,
                        max: 54
                    }, {
                        value: 0.7,
                        min: 45,
                        max: 49
                    }, {
                        value: 0,
                        min: 0,
                        max: 44
                    }]
                }
            }
        }
    };
});