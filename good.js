const checkup = {"checkupNo":19,"userNo":10,"name":"정성우","birthday":"19920201","gender":"1","checkupDate":"20200317","waistCm":"81.92","waistInch":"32.00","waistUnit":"in","heightCm":"184.00","heightFeet":"6.04","heightInch":"71.88","heightUnit":"cm","weightKg":"80.00","weightLb":"176.37","weightUnit":"kg","bmi":"23.6","bpHigh":"120","bpLow":"80","oligProteCd":"1","dfabPtnCd":"0","totChole":"160","triglyceride":"20","hdlChole":"65","ldlChole":"25","sgotAst":"5","sgptAlt":"5","gammaGtp":"11","creatinine":"0.8","hmg":"16.5","blds":"80","hchk":"","fmly":"","drnkHabit":"1","drnkQty":"4","smkStatType":"1","smkTerm":"0","smkQty":"0","mov20WekFreq":"5","mov30WekFreq":"4","wlk30WekFreq":"4","regDate":1584425198000}

function refine (object) {
    return Object.keys(object).reduce((prev, key) => {
        let converted
        try {
            converted = JSON.parse(object[key])
        } catch (e) {
            converted = object[key]
        }
        prev[key] = converted
        return prev
    }, { })
}

const asd = refine(checkup)

console.log(asd)
