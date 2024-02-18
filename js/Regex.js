let nameInput = false;
let emailInput = false;
let phoneInput = false;
let ageInput = false;
let passInput = false;
let repassInput = false;

export function nameCheck() {
  let nameRegex = /^[A-Za-z][A-Za-z]{2,17}$/;
  if (nameRegex.test($("#nameInput").val())) {
    // for Input
    $("#nameInput").addClass("is-valid");
    $("#nameInput").removeClass("is-invalid");

    // For Alert
    $("#nameAlert").removeClass("d-block");
    $("#nameAlert").addClass("d-none");

    nameInput = true;
  } else {
    // for Input
    $("#nameInput").addClass("is-invalid");
    $("#nameInput").removeClass("is-valid");

    // For Alert
    $("#nameAlert").removeClass("d-none");
    $("#nameAlert").addClass("d-block");
    nameInput = false;
  }
}
export function emailCheck() {
  let emailRegex =
    /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  if (emailRegex.test($("#emailInput").val())) {
    // for Input
    $("#emailInput").addClass("is-valid");
    $("#emailInput").removeClass("is-invalid");

    // For Alert
    $("#emailAlert").removeClass("d-block");
    $("#emailAlert").addClass("d-none");

    emailInput = true;
  } else {
    // for Input
    $("#emailInput").addClass("is-invalid");
    $("#emailInput").removeClass("is-valid");

    // For Alert
    $("#emailAlert").removeClass("d-none");
    $("#emailAlert").addClass("d-block");
    emailInput = false;
  }
}

export function phoneCheck() {
  let phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/;
  if (phoneRegex.test($("#phoneInput").val())) {
    // for Input
    $("#phoneInput").addClass("is-valid");
    $("#phoneInput").removeClass("is-invalid");

    // For Alert
    $("#phoneAlert").removeClass("d-block");
    $("#phoneAlert").addClass("d-none");

    phoneInput = true;
  } else {
    // for Input
    $("#phoneInput").addClass("is-invalid");
    $("#phoneInput").removeClass("is-valid");

    // For Alert
    $("#phoneAlert").removeClass("d-none");
    $("#phoneAlert").addClass("d-block");
    phoneInput = false;
  }
}

export function ageCheck() {
  let ageRegex = /^(1[6-9]|[2-8][0-9]|90)$/;
  if (ageRegex.test($("#ageInput").val())) {
    // for Input
    $("#ageInput").addClass("is-valid");
    $("#ageInput").removeClass("is-invalid");

    // For Alert
    $("#ageAlert").removeClass("d-block");
    $("#ageAlert").addClass("d-none");

    ageInput = true;
  } else {
    // for Input
    $("#ageInput").addClass("is-invalid");
    $("#ageInput").removeClass("is-valid");

    // For Alert
    $("#ageAlert").removeClass("d-none");
    $("#ageAlert").addClass("d-block");
    ageInput = false;
  }
}
export function passCheck() {
  let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/;
  if (passRegex.test($("#passInput").val())) {
    // for Input
    $("#passInput").addClass("is-valid");
    $("#passInput").removeClass("is-invalid");

    // For Alert
    $("#passAlert").removeClass("d-block");
    $("#passAlert").addClass("d-none");

    passInput = true;
  } else {
    // for Input
    $("#passInput").addClass("is-invalid");
    $("#passInput").removeClass("is-valid");

    // For Alert
    $("#passAlert").removeClass("d-none");
    $("#passAlert").addClass("d-block");
    passInput = false;
  }
  if (
    $("#passInput").val() !== "" &&
    $("#passInput").val() === $("#repassInput").val()
  ) {
    $("#repassInput").addClass("is-valid");
    $("#repassInput").removeClass("is-invalid");

    // For Alert
    $("#repassAlert").removeClass("d-block");
    $("#repassAlert").addClass("d-none");

    repassInput = true;
  } else {
    // for Input
    $("#repassInput").addClass("is-invalid");
    $("#repassInput").removeClass("is-valid");

    // For Alert
    $("#repassAlert").removeClass("d-none");
    $("#repassAlert").addClass("d-block");
    repassInput = false;
  }
}

export function checkAll() {
  if (
    nameInput &&
    emailInput &&
    phoneInput &&
    ageInput &&
    passInput &&
    repassInput
  ) {
    $("#form .btn").removeClass("disabled");
  } else {
    $("#form .btn").addClass("disabled");
  }
}
