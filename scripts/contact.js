document.addEventListener("DOMContentLoaded", function () {
  const encodeEmail = (email) => {
    return email
      .split("")
      .map((char) => `&#${char.charCodeAt(0)};`)
      .join("");
  };

  const fkj43n = "farnoosh";
  const n34kun = "shamsian";
  const mlfaimafe4i = "uni-leipzig.de";
  const jfo48458j95 = "gmail.com";
  const oeigjerogi = `${fkj43n}.${n34kun}@${mlfaimafe4i}`;
  const alndsku5fl = `${fkj43n}.${n34kun}@${jfo48458j95}`;

  const encodedOeigjerogi = encodeEmail(oeigjerogi);
  const encodedAlndsku5fl = encodeEmail(alndsku5fl);

  const mlfaimafe4iElement = document.getElementById("jrh3948fns43k4n");
  mlfaimafe4iElement.innerHTML = `<a href="mailto:${encodedOeigjerogi}">${encodedOeigjerogi}</a>`;

  const alndsku5flElement = document.getElementById("kkjreg42g8qpr98gjr");
  alndsku5flElement.innerHTML = `<a href="mailto:${encodedAlndsku5fl}">${encodedAlndsku5fl}</a>`;
});
