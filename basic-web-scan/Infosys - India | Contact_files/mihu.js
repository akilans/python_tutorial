/* Script for MIHU control - START */
var currPageRelUrl = '';
currPageRelUrl = _spPageContextInfo.webServerRelativeUrl;
if (!currPageRelUrl.endsWith("/")) {
    currPageRelUrl = currPageRelUrl + "/";
}

var relUrl = "/";
if (currPageRelUrl.includes('/jp/')) {
    relUrl = "/jp/"
}

//Script for Getting MIHU html for Desktop
var signInDesktopHTML = {};
var jsonCookieObject = JSON.stringify(signInDesktopHTML);
var mihuPopUp = "";
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetMIHUHtml?relativeUrl=" + relUrl,
    data: jsonCookieObject,
    dataType: "json",
    processData: true,
    success: function (responseData) {
        mihuPopUp = responseData;
    },
    error: function (xhr, ajaxOptions, thrownError) {
        LoggingInConsole(xhr.status);
        LoggingInConsole(thrownError);
    }
});

//Script for Getting MIHU Data for Tablet 
var signInTabHTML = {};
var jsonCookieObject = JSON.stringify(signInTabHTML);
var mihuModalPopUp = "";
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetTabMIHUHtml?relativeUrl=" + relUrl,
    data: jsonCookieObject,
    dataType: "json",
    processData: true,
    success: function (responseData) {
        mihuModalPopUp = responseData;
    },
    error: function (xhr, ajaxOptions, thrownError) {
        LoggingInConsole(xhr.status);
        LoggingInConsole(thrownError);
    }
});

window.onload = function () {
    var isDeviceMobile = false;
    if ($.cookie('DeviceChannel') && $.cookie('DeviceChannel').toUpperCase() == "MOBILE") {
        isDeviceMobile = true;
    }
    if (!isDeviceMobile) {
        setTimeout(function (e) {
            if (!$.cookie("shwmhpp")) {
                if ($.cookie('DeviceChannel') && $.cookie('DeviceChannel').toUpperCase() == "TABLET") {
                    $('.tile_mayihelpu_mobile').show();
                }
                else {
                    $('.tile_mayihelpu').slideDown(1000);
                    _satellite.track("mihupopupload");
                }
            }
        }, 30000)
    }
};


$('#mihu_maximize_popup').click(function (e) {
    $('.tile_mayihelpu').after(mihuPopUp);
    $('.tile_mayihelpu').hide();
    $('#mihuLName').hide();
    $('.popup_mayihelpu').slideDown(1000)
    $('input, textarea').placeholder({ customClass: 'my-placeholder' });
    if ($.cookie("a_svcgrt") == null) {
        $.cookie("a_svcrgt", "true", { expires: 2, path: '/', secure: true });
    }

});

$('#mihu_maximize_modal').click(function (e) {
    $('.tile_mayihelpu_mobile').after(mihuModalPopUp);
    $('.tile_mayihelpu_mobile').hide();
    $('#modal_mayihelpu').modal('show');
    $('input, textarea').placeholder({ customClass: 'my-placeholder' });
    $('#modalLName').hide();
    if ($.cookie("a_svcgrt") == null) {
        $.cookie("a_svcrgt", "true", { expires: 2, path: '/', secure: true });
    }
});

$(document).on('click', '#mihuSubmit', function (event) {
    if ($('.divMIHUError').length > 0) {
        $('.divMIHUError').remove();
    }

    if (IsMIHUDataValid()) {
        var mihuName = $('#mihuFName').val();
        var mihuEmail = $('#mihuEmail').val();
        var mihuLName = $('#mihuLName').val();
        var mihuComment = $('#mihuComment').val();
        var mihuData = { name: mihuName, lname: mihuLName, email: mihuEmail, message: mihuComment };
        $.ajax({
            type: "POST",
            cache: false,
            contentType: "application/json; charset=utf-8",
            url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/SaveMIHUData",
            data: JSON.stringify(mihuData),
            dataType: "json",
            processData: true,
            success: function (responseData) {
                if (responseData.SaveMIHUDataResult.toUpperCase() == "SUCCESS") {
                    $('.popup_mayihelpu').remove();
                    $('.popup_mayihelpu_2').show();
                }
                else {
                    $('#mihuSubmit').before('<div class="divMIHUError">Invalid name or email.</div>');
                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                LoggingInConsole(xhr.status);
                LoggingInConsole(thrownError);
                $(this).before('<div class="divMIHUError">Data not saved. Please try again</div>');
            },
            async: false
        });

    }
    else {
        $(this).before('<div class="divMIHUError">Empty or invalid field length.</div>');
    }
});

$(document).on('click', '#modalSubmit', function (event) {
    if ($('.divMIHUError').length > 0) {
        $('.divMIHUError').remove();
    }

    if (IsModalMIHUDataValid()) {
        var mihuName = $('#modalFName').val();
        var mihuEmail = $('#modalEmail').val();
        var mihuLName = $('#modalLName').val();
        var mihuComment = $('#modalComment').val();
        var mihuData = { name: mihuName, lname: mihuLName, email: mihuEmail, message: mihuComment };
        $.ajax({
            type: "POST",
            cache: false,
            contentType: "application/json; charset=utf-8",
            url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/SaveMIHUData",
            data: JSON.stringify(mihuData),
            dataType: "json",
            processData: true,
            success: function (responseData) {
                if (responseData.SaveMIHUDataResult.toUpperCase() == "SUCCESS") {
                    $('#modal_mayihelpu').remove();
                    $('.modal-backdrop').remove();
                    $('body').removeClass('modal-open');
                    $('body').removeAttr('style');
                    $('#modal_mayihelpu_2').modal('show');
                }
                else {
                    $('#modalSubmit').before('<div class="divMIHUError">Invalid name or email.</div>');

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                LoggingInConsole(xhr.status);
                LoggingInConsole(thrownError);
                $(this).before('<div class="divMIHUError">Data not saved. Please try again</div>');
            },
            async: false
        });

    }
    else {
        $(this).before('<div class="divMIHUError">Empty or invalid field length.</div>');
    }
});

$(document).on('click', '.minimize_mihu', function (event) {
    $('.popup_mayihelpu').remove();
    $('.tile_mayihelpu').show();
});

$(document).on('click', '.minimize_mihu_mobile', function (event) {
    $('#modal_mayihelpu').remove();
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    $('body').removeAttr('style');
    $('.tile_mayihelpu_mobile').show();
});

$(document).on('click', '#close_mihu_tile', function (event) {
    if (!$.cookie("shwmhpp")) {
        $.cookie("shwmhpp", true, { path: '/', secure: true });
    }
    $('.popup_mayihelpu_2').remove();
    $('.tile_mayihelpu').remove();
});

$(document).on('click', '#close_mihu_mobile_tile', function (event) {
    if (!$.cookie("shwmhpp")) {
        $.cookie("shwmhpp", true, { path: '/', secure: true });
    }
    $('#modal_mayihelpu_2').remove();
    $('.tile_mayihelpu_mobile').remove();
});

$(document).on('click', '#close_mihu_popup', function (event) {
    if (!$.cookie("shwmhpp")) {
        $.cookie("shwmhpp", true, { path: '/', secure: true });
    }
    $('.tile_mayihelpu').remove();
    $('.popup_mayihelpu_2').remove();
    $('.popup_mayihelpu').remove();
});

$(document).on('click', '#modal_mayihelpu .close', function (event) {
    if (!$.cookie("shwmhpp")) {
        $.cookie("shwmhpp", true, { path: '/', secure: true });
    }
    $('#modal_mayihelpu').remove();
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    $('body').removeAttr('style');
    $('.tile_mayihelpu_mobile').remove();
});

$(document).on('click', '.close_mihu_2', function (event) {
    $('.tile_mayihelpu').remove();
    $('.popup_mayihelpu_2').remove();
});

$(document).on('click', '#modal_mayihelpu_2 .close', function (event) {
    $('.tile_mayihelpu_mobile').remove();
    $('.#modal_mayihelpu_2').remove();
});

$('#modal_mayihelpu_2').on('hide.bs.modal', function (e) {
    $('.tile_mayihelpu_mobile').show();
})

$(document).on('click', '.modal-backdrop', function (event) {
    $('#modal_mayihelpu').remove();
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    $('body').removeAttr('style');
    $('.tile_mayihelpu_mobile').remove();
});

$('#modal_mayihelpu_2').on('show.bs.modal', function () {
    $('body').addClass('modal-open-mihu');
})
.on('hide.bs.modal', function () {
    // Also if you are using multiple modals (cascade) - additional check
    if ($('.modal.in').length == 1) {
        $('body').removeClass('modal-open-mihu');
    }
});

function IsMIHUDataValid() {
    if ($('#mihuFName').val().length <= 0 || $('#mihuFName').val().length > 30) {
        return false;
    }
    if ($('#mihuComment').val().length <= 0 || $('#mihuComment').val().length > 500) {
        return false;
    }
    if ($('#mihuEmail').val().length <= 0 || $('#mihuEmail').val().length > 50) {
        return false;
    }
    return true;
}

function IsModalMIHUDataValid() {
    if ($('#modalFName').val().length <= 0 || $('#modalFName').val().length > 30) {
        return false;
    }
    if ($('#modalComment').val().length <= 0 || $('#modalComment').val().length > 500) {
        return false;
    }
    if ($('#modalEmail').val().length <= 0 || $('#modalEmail').val().length > 50) {
        return false;
    }
    return true;
}
/* Script for MIHU control - END */