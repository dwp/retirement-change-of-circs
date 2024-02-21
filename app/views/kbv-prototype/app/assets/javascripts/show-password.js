window.GOVUK = window.GOVUK || {},
    window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(t) {
        function s(t) {
            this.$module = t,
                this.input = this.$module.querySelector(".govuk-password-input")
        }
        s.prototype.init = function() {
            this.$module.togglePassword = this.togglePassword.bind(this),
                this.$module.revertToPasswordOnFormSubmit = this.revertToPasswordOnFormSubmit.bind(this),
                this.input.classList.add("govuk-input--with-password"),
                this.showPasswordText = this.$module.getAttribute("data-show-text"),
                this.hidePasswordText = this.$module.getAttribute("data-hide-text"),
                this.showPasswordFullText = this.$module.getAttribute("data-show-full-text"),
                this.hidePasswordFullText = this.$module.getAttribute("data-hide-full-text"),
                this.shownPassword = this.$module.getAttribute("data-announce-show"),
                this.hiddenPassword = this.$module.getAttribute("data-announce-hide"),
                this.wrapper = document.createElement("div"),
                this.wrapper.classList.add("govuk-show-password__input-wrapper"),
                this.input.parentNode.insertBefore(this.wrapper, this.input),
                this.wrapper.appendChild(this.input),
                this.showHide = document.createElement("button"),
                this.showHide.className = "govuk-show-password__toggle",
                this.showHide.setAttribute("aria-controls", this.input.getAttribute("id")),
                this.showHide.setAttribute("type", "button"),
                this.showHide.setAttribute("aria-label", this.showPasswordFullText),
                this.showHide.innerHTML = this.showPasswordText,
                this.wrapper.insertBefore(this.showHide, this.input.nextSibling),
                this.statusText = document.createElement("span"),
                this.statusText.classList.add("govuk-visually-hidden"),
                this.statusText.innerHTML = this.hiddenPassword,
                this.statusText.setAttribute("aria-live", "polite"),
                this.wrapper.insertBefore(this.statusText, this.showHide.nextSibling),
                this.showHide.addEventListener("click", this.$module.togglePassword),
                this.moveDataAttributesToButton(),
                this.parentForm = this.input.form;
            var t = this.$module.getAttribute("data-disable-form-submit-check");
            this.parentForm && !t && this.parentForm.addEventListener("submit", this.$module.revertToPasswordOnFormSubmit)
        }
            ,
            s.prototype.togglePassword = function(t) {
                t.preventDefault(),
                    this.showHide.innerHTML = this.showHide.innerHTML === this.showPasswordText ? this.hidePasswordText : this.showPasswordText,
                    this.showHide.setAttribute("aria-label", this.showHide.getAttribute("aria-label") === this.showPasswordFullText ? this.hidePasswordFullText : this.showPasswordFullText),
                    this.statusText.innerHTML = this.statusText.innerHTML === this.shownPassword ? this.hiddenPassword : this.shownPassword,
                    this.input.setAttribute("type", "text" === this.input.getAttribute("type") ? "password" : "text")
            }
            ,
            s.prototype.revertToPasswordOnFormSubmit = function(t) {
                this.showHide.innerHTML = this.showPasswordText,
                    this.showHide.setAttribute("aria-label", this.showPasswordFullText),
                    this.statusText.innerHTML = this.hiddenPassword,
                    this.input.setAttribute("type", "password")
            }
            ,
            s.prototype.moveDataAttributesToButton = function() {
                for (var t = this.input.attributes, s = t.length; 0 <= s; s--) {
                    var e = t[s];
                    e && /^data-button/.test(e.name) && (this.showHide.setAttribute(e.name.replace("-button", ""), e.value),
                        this.input.removeAttribute(e.name))
                }
            }
            ,
            t.ShowPassword = s
    }(window.GOVUK.Modules);
function initFeedbackRadioButtons() {
    var e = Array.prototype.slice.call(document.querySelectorAll('input[name="feedbackContact"]'))
        , o = document.querySelector("#contact-details-container");
    e.forEach(function(e) {
        e.addEventListener("click", function(e) {
            if ("true" === e.target.value)
                o.classList.remove("govuk-!-display-none");
            else {
                o.classList.add("govuk-!-display-none");
                for (var n = o.getElementsByTagName("input"), t = 0; t < n.length; t++)
                    "text" == n[t].type && (n[t].value = "")
            }
        }
            .bind(this))
    })
}
var onIntNumberSelected = function(e, n) {
    e.checked ? (n.value = "",
        n.disabled = !0,
        n.classList.add("govuk-input--disabled")) : (n.disabled = !1,
        n.classList.remove("govuk-input--disabled"))
};
function initEnterPhoneNumber() {
    var n = document.querySelector("#phoneNumber")
        , e = document.querySelector("#hasInternationalPhoneNumber");
    n && e && (e.addEventListener("click", function(e) {
        onIntNumberSelected(e.currentTarget, n)
    }),
        window.addEventListener("load", onIntNumberSelected(e, n)))
}
!function(e) {
    "use strict";
    if (initFeedbackRadioButtons(),
        initEnterPhoneNumber(),
    e.GOVUK && e.GOVUK.Modules && e.GOVUK.Modules.ShowPassword)
        for (var n = document.querySelectorAll('[data-module="show-password"]'), t = 0, o = n.length; t < o; t++)
            GOVUK.Modules.ShowPassword.prototype.init && new GOVUK.Modules.ShowPassword(n[t]).init();
    e.GOVSignIn.appInit = function(e, n) {
        window.GOVUKFrontend.initAll(),
        (n = window.GOVSignIn.Cookies(e, n)).hasConsentForAnalytics() && n.initAnalytics(),
            n.isOnCookiesPage() ? n.cookiesPageInit() : n.cookieBannerInit()
    }
}(window);














