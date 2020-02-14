let emailAddress = prompt('enter Email Address you want to protect');

const protectEmail = email =>{
    let splitEmail,part1,part2,midpoint;
    splitEmail = email.split("@");
    part1 = splitEmail[0];
    midpoint = part1.length / 2;
    part1 = part1.substring(0,(part1.length-midpoint));
    part2 = splitEmail[1];
    return part1 + "***@" + part2;
}

document.write(protectEmail(emailAddress));