(function(g) {
    var window = this;
    'use strict';
    var BWa = function(a, b) {
            var c = (b - a.j) / (a.u - a.j);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, k = 0; 8 > k; k++) {
                f = g.Gp(a, c);
                var l = (g.Gp(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (k = 0; 1E-6 < Math.abs(f - b) && 8 > k; k++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Gp(a, c);
            return c
        },
        I2 = function() {
            return {
                F: "svg",
                T: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                R: [{
                    F: "path",
                    Jb: !0,
                    K: "ytp-svg-fill",
                    T: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        J2 = function(a) {
            g.G.call(this);
            this.callback = a;
            this.u = new g.Fp(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.hp(this.next, window, this);
            this.startTime = this.duration = this.j = this.from = NaN;
            g.H(this, this.delay)
        },
        K2 = function(a) {
            g.W.call(this, {
                F: "div",
                K: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.j = 0;
            this.C = new g.Uz(this);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.W({
                F: "h2",
                K: "ytp-related-title",
                Z: "{{title}}"
            });
            this.previous = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-previous"],
                T: {
                    "aria-label": "Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"
                },
                R: [g.MG()]
            });
            this.N = new J2(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.u = 0;
            this.I = !0;
            this.next = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-next"],
                T: {
                    "aria-label": "Hi\u1ec7n th\u00eam video \u0111\u1ec1 xu\u1ea5t"
                },
                R: [g.NG()]
            });
            g.H(this, this.C);
            a = a.S();
            this.J = a.j;
            g.H(this, this.title);
            this.title.xa(this.element);
            this.suggestions = new g.W({
                F: "div",
                K: "ytp-suggestions"
            });
            g.H(this, this.suggestions);
            this.suggestions.xa(this.element);
            g.H(this, this.previous);
            this.previous.xa(this.element);
            this.previous.Ja("click", this.jU, this);
            g.H(this, this.N);
            for (var c = {
                    jt: 0
                }; 16 >
                c.jt; c = {
                    jt: c.jt
                }, c.jt++) {
                var d = new g.W({
                    F: "a",
                    K: "ytp-suggestion-link",
                    T: {
                        href: "{{link}}",
                        target: a.J,
                        "aria-label": "{{aria_label}}"
                    },
                    R: [{
                        F: "div",
                        K: "ytp-suggestion-image",
                        R: [{
                            F: "div",
                            T: {
                                "data-is-live": "{{is_live}}"
                            },
                            K: "ytp-suggestion-duration",
                            Z: "{{duration}}"
                        }]
                    }, {
                        F: "div",
                        K: "ytp-suggestion-title",
                        T: {
                            title: "{{hover_title}}"
                        },
                        Z: "{{title}}"
                    }, {
                        F: "div",
                        K: "ytp-suggestion-author",
                        Z: "{{views_or_author}}"
                    }]
                });
                g.H(this, d);
                d.xa(this.suggestions.element);
                var e = d.ya("ytp-suggestion-link");
                g.um(e, "transitionDelay",
                    c.jt / 20 + "s");
                this.C.P(e, "click", function(f) {
                    return function(k) {
                        var l = b.suggestionData[f.jt],
                            m = l.sessionData;
                        g.mK(k, b.api, b.J, m || void 0) && b.api.ll(l.videoId, m, l.playlistId)
                    }
                }(c));
                this.B.push(d)
            }
            g.H(this, this.next);
            this.next.xa(this.element);
            this.next.Ja("click", this.iU, this);
            this.C.P(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.Va().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        L2 = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.u,
                c = a.containerWidth - a.suggestionData.length * (a.tileWidth + a.j);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        CWa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Yl(),
                    k = a.api.S();
                if (g.YB(k)) {
                    var l = {};
                    k.oa && g.AI(l, k.loaderUrl);
                    f = g.Ti(f, g.zI(l, "emb_rel_err"))
                }
                d.element.style.display = "";
                k = d.ya("ytp-suggestion-title");
                g.Dp.test(c.title) ? k.dir = "rtl" : g.TRa.test(c.title) && (k.dir = "ltr");
                k = d.ya("ytp-suggestion-author");
                g.Dp.test(e) ? k.dir = "rtl" : g.TRa.test(e) && (k.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Tr\u1ef1c ti\u1ebfp" : c.lengthSeconds ? g.GH(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                d = d.ya("ytp-suggestion-image");
                c = c.wf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            L2(a)
        },
        M2 = function(a) {
            g.rK.call(this, a);
            var b = this;
            this.j = null;
            var c = a.S(),
                d = {
                    F: "svg",
                    T: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    R: [{
                        F: "path",
                        T: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        F: "path",
                        T: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.iC(c) && (d = {
                F: "svg",
                T: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                R: [{
                        F: "g",
                        T: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        R: [{
                            F: "path",
                            T: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            F: "path",
                            T: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        F: "defs",
                        R: [{
                            F: "clipPath",
                            T: {
                                id: "clip0"
                            },
                            R: [{
                                F: "path",
                                T: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            var e = {
                    target: c.J
                },
                f = ["ytp-small-redirect"];
            if (c.C) f.push("no-link");
            else {
                var k = g.IC(c);
                c.oa && (k = DWa(k, c.loaderUrl));
                e.href = k;
                e["aria-label"] = "Truy c\u1eadp v\u00e0o YouTube \u0111\u1ec3 t\u00ecm ki\u1ebfm nhi\u1ec1u video h\u01a1n"
            }
            c = new g.W({
                F: "a",
                Ba: f,
                T: e,
                R: [d]
            });
            c.xa(this.element);
            g.H(this, c);
            a.S().C || (this.j = new K2(a), this.j.xa(this.element), g.H(this, this.j));
            this.P(a,
                "videodatachange",
                function() {
                    b.show()
                });
            this.resize(this.api.Va().getPlayerSize())
        },
        EWa = function(a, b) {
            a.ya("ytp-error-content").style.paddingTop = "0px";
            var c = a.ya("ytp-error-content"),
                d = c.clientHeight;
            a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px"
        },
        FWa = function(a, b) {
            var c;
            b.reason && (N2(b.reason) ? c = g.Bw(b.reason) : c = g.sK(g.Aw(b.reason)), a.Ld(c, "content"));
            var d;
            b.subreason && (N2(b.subreason) ? d = g.Bw(b.subreason) : d = g.sK(g.Aw(b.subreason)), a.Ld(d, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (c = a.ya("ytp-error-content-wrap-subreason"), d = b.proceedButton.buttonRenderer, b = g.Oh("A"), d.text && d.text.simpleText)) {
                var e = d.text.simpleText;
                b.textContent = e;
                a: {
                    for (var f = g.Gh("A", c), k = 0; k < f.length; k++)
                        if (f[k].textContent === e) {
                            e = !0;
                            break a
                        }
                    e = !1
                }
                if (!e) {
                    var l, m;
                    e = null ==
                        d ? void 0 : null == (l = d.navigationEndpoint) ? void 0 : null == (m = l.urlEndpoint) ? void 0 : m.url;
                    var n, p;
                    l = null == d ? void 0 : null == (n = d.navigationEndpoint) ? void 0 : null == (p = n.urlEndpoint) ? void 0 : p.target;
                    e && (a = a.api.S(), a.oa && (e = DWa(e, a.loaderUrl)), b.setAttribute("href", e));
                    l && b.setAttribute("target", l);
                    a = g.Oh("DIV");
                    a.appendChild(b);
                    c.appendChild(a)
                }
            }
        },
        N2 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        DWa = function(a, b) {
            var c = {};
            g.AI(c, b);
            return g.Ti(a, c)
        },
        O2 = function(a, b) {
            g.W.call(this, {
                F: "a",
                Ba: ["ytp-impression-link"],
                T: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Xem tr\u00ean YouTube"
                },
                R: [{
                    F: "div",
                    K: "ytp-impression-link-content",
                    T: {
                        "aria-hidden": "true"
                    },
                    R: [{
                        F: "div",
                        K: "ytp-impression-link-text",
                        Z: "Xem tr\u00ean"
                    }, {
                        F: "div",
                        K: "ytp-impression-link-logo",
                        R: [I2()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.Ha("target", a.S().J);
            this.api.xb(this.element, this, 96714);
            this.P(this.api, "presentingplayerstatechange", this.Zg);
            this.P(this.api, "videoplayerreset", this.j);
            this.P(this.element, "click", this.onClick);
            this.j()
        },
        GWa = function(a) {
            var b = {};
            a.api.S().oa && g.AI(b, a.api.S().loaderUrl);
            return g.Ti(a.api.getVideoUrl(), g.zI(b, "emb_imp_woyt"))
        },
        P2 = function(a) {
            g.W.call(this, {
                F: "div",
                Ba: ["ytp-mobile-a11y-hidden-seek-button"],
                R: [{
                    F: "button",
                    Ba: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    T: {
                        "aria-label": "Tua l\u1ea1i 10 gi\u00e2y",
                        "aria-hidden": "false"
                    }
                }, {
                    F: "button",
                    Ba: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    T: {
                        "aria-label": "Tua \u0111i 10 gi\u00e2y",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.ya("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.ya("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.xb(this.j, this, 141902);
            this.api.xb(this.forwardButton, this, 141903);
            this.P(this.api, "presentingplayerstatechange", this.Zg);
            this.P(this.j, "click", this.u);
            this.P(this.forwardButton, "click", this.B);
            this.Zg()
        },
        Q2 = function(a) {
            g.W.call(this, {
                F: "div",
                K: "ytp-muted-autoplay-endscreen-overlay",
                R: [{
                    F: "div",
                    K: "ytp-muted-autoplay-end-panel",
                    R: [{
                        F: "div",
                        K: "ytp-muted-autoplay-end-text",
                        Z: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.ya("ytp-muted-autoplay-end-panel");
            this.j = new g.kK(this.api);
            g.H(this, this.j);
            this.j.xa(this.B, 0);
            this.api.xb(this.element, this, 52428);
            this.P(this.api, "presentingplayerstatechange", this.u);
            this.Ja("click", this.onClick);
            this.hide()
        },
        R2 = function(a) {
            g.W.call(this, {
                F: "div",
                K: "ytp-muted-autoplay-overlay",
                R: [{
                    F: "div",
                    K: "ytp-muted-autoplay-bottom-buttons",
                    R: [{
                        F: "button",
                        Ba: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        R: [{
                            F: "div",
                            Ba: ["ytp-muted-autoplay-equalizer-icon"],
                            R: [{
                                F: "svg",
                                T: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                R: [{
                                    F: "g",
                                    T: {
                                        fill: "#fff"
                                    },
                                    R: [{
                                        F: "rect",
                                        K: "ytp-equalizer-bar-left",
                                        T: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        F: "rect",
                                        K: "ytp-equalizer-bar-middle",
                                        T: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        F: "rect",
                                        K: "ytp-equalizer-bar-right",
                                        T: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.ya("ytp-muted-autoplay-bottom-buttons");
            this.ya("ytp-muted-autoplay-equalizer");
            this.B = new g.L(this.u, 4E3, this);
            a.xb(this.element, this, 39306);
            this.P(a, "presentingplayerstatechange", this.j);
            this.P(a, "onMutedAutoplayStarts", this.j);
            this.Ja("click", this.onClick);
            this.hide()
        },
        S2 = function(a, b) {
            g.W.call(this, {
                F: "div",
                K: "ytp-pause-overlay",
                T: {
                    tabIndex: "-1"
                }
            });
            var c = this;
            this.api = a;
            this.I = b;
            this.j = new g.Uz(this);
            this.C = new g.sH(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.W = 0;
            this.title = new g.W({
                F: "h2",
                K: "ytp-related-title",
                Z: "{{title}}"
            });
            this.previous = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-previous"],
                T: {
                    "aria-label": "Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"
                },
                R: [g.MG()]
            });
            this.N = new J2(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.V = this.tileWidth = this.u = 0;
            this.next = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-next"],
                T: {
                    "aria-label": "Hi\u1ec7n th\u00eam video \u0111\u1ec1 xu\u1ea5t"
                },
                R: [g.NG()]
            });
            this.expandButton = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-expand"],
                Z: "Video kh\u00e1c"
            });
            g.H(this, this.j);
            g.H(this, this.C);
            b = a.S();
            "0" === b.controlsType && g.N(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.J = b.j;
            g.H(this, this.title);
            this.title.xa(this.element);
            this.suggestions = new g.W({
                F: "div",
                K: "ytp-suggestions"
            });
            g.H(this,
                this.suggestions);
            this.suggestions.xa(this.element);
            g.H(this, this.previous);
            this.previous.xa(this.element);
            this.previous.Ja("click", this.lU, this);
            g.H(this, this.N);
            for (a = {
                    kt: 0
                }; 16 > a.kt; a = {
                    kt: a.kt
                }, a.kt++) {
                var d = new g.W({
                    F: "a",
                    K: "ytp-suggestion-link",
                    T: {
                        href: "{{link}}",
                        target: b.J,
                        "aria-label": "{{aria_label}}"
                    },
                    R: [{
                        F: "div",
                        K: "ytp-suggestion-image"
                    }, {
                        F: "div",
                        K: "ytp-suggestion-overlay",
                        T: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        R: [{
                                F: "div",
                                K: "ytp-suggestion-title",
                                Z: "{{title}}"
                            },
                            {
                                F: "div",
                                K: "ytp-suggestion-author",
                                Z: "{{author_and_views}}"
                            }, {
                                F: "div",
                                T: {
                                    "data-is-live": "{{is_live}}"
                                },
                                K: "ytp-suggestion-duration",
                                Z: "{{duration}}"
                            }
                        ]
                    }]
                });
                g.H(this, d);
                d.xa(this.suggestions.element);
                var e = d.ya("ytp-suggestion-link");
                g.um(e, "transitionDelay", a.kt / 20 + "s");
                this.j.P(e, "click", function(f) {
                    return function(k) {
                        var l = f.kt;
                        if (1E3 > (0, g.R)() - c.W) g.gu(k), document.activeElement.blur();
                        else {
                            l = c.suggestionData[l];
                            var m = l.sessionData;
                            g.mK(k, c.api, c.J, m || void 0) && c.api.ll(l.videoId, m, l.playlistId)
                        }
                    }
                }(a));
                this.B.push(d)
            }
            g.H(this, this.next);
            this.next.xa(this.element);
            this.next.Ja("click", this.kU, this);
            b = new g.W({
                F: "button",
                Ba: ["ytp-button", "ytp-collapse"],
                T: {
                    "aria-label": "\u1ea8n ph\u1ea7n Video kh\u00e1c"
                },
                R: [{
                    F: "svg",
                    T: {
                        height: "100%",
                        viewBox: "0 0 16 16",
                        width: "100%"
                    },
                    R: [{
                        F: "path",
                        T: {
                            d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                            fill: "#fff"
                        }
                    }]
                }]
            });
            g.H(this, b);
            b.xa(this.element);
            b.Ja("click", this.tY, this);
            g.H(this, this.expandButton);
            this.expandButton.xa(this.element);
            this.expandButton.Ja("click",
                this.uY, this);
            this.j.P(this.api, "appresize", this.ub);
            this.j.P(this.api, "fullscreentoggled", this.Rn);
            this.j.P(this.api, "presentingplayerstatechange", this.Xc);
            this.j.P(this.api, "videodatachange", this.onVideoDataChange);
            this.ub(this.api.Va().getPlayerSize());
            this.onVideoDataChange()
        },
        T2 = function(a) {
            var b = a.I.Ff() ? 32 : 16;
            b = a.V / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        HWa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.SRa.test(c.title) && (d.ya("ytp-suggestion-title").dir = "rtl");
                g.SRa.test(e) && (d.ya("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Tr\u1ef1c ti\u1ebfp" : c.lengthSeconds ? g.GH(c.lengthSeconds) : "";
                var k = c.Yl();
                if (g.YB(a.api.S())) {
                    var l = {};
                    a.api.S().oa && g.AI(l, a.api.S().loaderUrl);
                    k = g.Ti(k, g.zI(l, "emb_rel_pause"))
                }
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: k,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.ariaLabel || a.api.S().L("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.Yz || g.WB ? "will-change: opacity" : void 0
                });
                d = d.ya("ytp-suggestion-image");
                c = c.wf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            T2(a)
        },
        U2 = function(a) {
            var b = a.S();
            g.W.call(this, {
                F: "a",
                Ba: ["ytp-watermark", "yt-uix-sessionlink"],
                T: {
                    target: b.J,
                    href: "{{url}}",
                    "aria-label": g.rF("Xem tr\u00ean $WEBSITE", {
                        WEBSITE: g.tC(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                R: [I2()]
            });
            this.api = a;
            this.j = null;
            this.u = !1;
            this.state = a.vb();
            a.xb(this.element, this, 76758);
            this.P(a, "videodatachange", this.TJ);
            this.P(a, "videodatachange", this.onVideoDataChange);
            this.P(a, "presentingplayerstatechange", this.onStateChange);
            this.P(a, "appresize", this.ub);
            b = this.state;
            this.state !== b && (this.state =
                b);
            this.TJ();
            this.onVideoDataChange();
            this.ub(a.Va().getPlayerSize())
        },
        V2 = function(a) {
            g.CJ.call(this, a);
            this.G = a;
            this.j = new g.Uz(this);
            g.H(this, this.j);
            this.load()
        },
        W2 = function(a, b) {
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: 0 === a.G.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.G.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Bca(a.G.S().loaderUrl),
                eventType: b,
                youtubeHost: g.Ni(a.G.S().Y) || ""
            };
            g.os("embedsAdEvent", a)
        };
    g.w(J2, g.G);
    J2.prototype.start = function(a, b, c) {
        this.from = a;
        this.j = b;
        this.duration = c;
        this.startTime = (0, g.R)();
        this.next()
    };
    J2.prototype.next = function() {
        var a = (0, g.R)() - this.startTime;
        var b = this.u;
        a = BWa(b, a / this.duration);
        if (0 == a) b = b.J;
        else if (1 == a) b = b.N;
        else {
            var c = g.qh(b.J, b.D, a),
                d = g.qh(b.D, b.I, a);
            b = g.qh(b.I, b.N, a);
            c = g.qh(c, d, a);
            d = g.qh(d, b, a);
            b = g.qh(c, d, a)
        }
        b = g.oh(b, 0, 1);
        this.callback((this.j - this.from) * b + this.from);
        1 > b && this.delay.start()
    };
    g.w(K2, g.W);
    g.h = K2.prototype;
    g.h.hide = function() {
        this.I = !0;
        g.W.prototype.hide.call(this)
    };
    g.h.show = function() {
        this.I = !1;
        g.W.prototype.show.call(this)
    };
    g.h.isHidden = function() {
        return this.I
    };
    g.h.iU = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.h.jU = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.h.resize = function(a, b) {
        var c = this.api.S(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            k = Math.min(this.suggestionData.length, this.B.length);
        if (150 >= Math.min(a.width, a.height) || 0 === k || !c.Bc) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.j = 16
            } else this.j = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.j;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.j)), l = a / l - this.j,
                m = Math.floor(l / d));
            50 > l || g.lJ(this.api) ? this.hide() : this.show();
            for (b = 0; b < k; b++) {
                d = this.B[b];
                var q = d.ya("ytp-suggestion-image");
                q.style.width = l + "px";
                q.style.height = m + "px";
                d.ya("ytp-suggestion-title").style.width = l + "px";
                d.ya("ytp-suggestion-author").style.width = l + "px";
                d = d.ya("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            k = e + n + p + 4;
            this.D = k + c + (m - f) / 2;
            this.suggestions.element.style.height = m + k + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.u = 0;
            this.suggestions.element.scrollLeft = -0;
            L2(this)
        }
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.S();
        this.J = a.D ? !1 : b.j;
        a.suggestions ? this.suggestionData = g.sn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        CWa(this);
        a.D ? this.title.update({
            title: g.rF("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "Xem th\u00eam video tr\u00ean YouTube"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.oh(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + this.j), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        L2(this)
    };
    g.w(M2, g.rK);
    M2.prototype.show = function() {
        g.rK.prototype.show.call(this);
        EWa(this, this.api.Va().getPlayerSize())
    };
    M2.prototype.resize = function(a) {
        g.rK.prototype.resize.call(this, a);
        this.j && (EWa(this, a), g.O(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    M2.prototype.u = function(a) {
        g.rK.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.TE || b.playerErrorMessageRenderer)(a = b.TE) ? FWa(this, a) : b.playerErrorMessageRenderer && FWa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.wk && (b.jr ? N2(b.jr) ? c = g.Bw(b.jr) : c = g.sK(g.Aw(b.jr)) : c = g.sK(a.wk), this.Ld(c, "subreason"))
        }
    };
    g.w(O2, g.W);
    O2.prototype.Zg = function() {
        this.api.vb().isCued() || (this.hide(), this.api.Ua(this.element, !1))
    };
    O2.prototype.j = function() {
        var a = this.api.getVideoData(),
            b = this.api.S(),
            c = this.api.getVideoData().D,
            d = b.Kc,
            e = !b.Bc,
            f = this.u.fg(),
            k = g.iC(b);
        b = b.C;
        d || f || c || e || k || b || !a.videoId ? (this.hide(), this.api.Ua(this.element, !1)) : (a = GWa(this), this.Ha("url", a), this.show())
    };
    O2.prototype.onClick = function(a) {
        var b = GWa(this);
        g.nK(b, this.api, a);
        this.api.rb(this.element)
    };
    O2.prototype.show = function() {
        this.api.vb().isCued() && (g.W.prototype.show.call(this), this.api.Cp(this.element) && this.api.Ua(this.element, !0))
    };
    g.w(P2, g.W);
    P2.prototype.Zg = function() {
        var a = this.api.vb();
        !this.api.Pf() || g.V(a, 2) && g.iJ(this.api) || g.V(a, 64) ? (this.api.Ua(this.j, !1), this.api.Ua(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Ua(this.j, !0), this.api.Ua(this.forwardButton, !0))
    };
    P2.prototype.u = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate());
        this.api.rb(this.j)
    };
    P2.prototype.B = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate());
        this.api.rb(this.forwardButton)
    };
    g.w(Q2, g.W);
    Q2.prototype.u = function() {
        var a = this.api.vb(),
            b = this.api.getVideoData();
        this.api.S().L("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.V(a, 2) && !this.ob ? (this.show(), this.j.show(), a = this.api.getVideoData(), this.Ha("text", a.BL), g.O(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Ua(this.element, this.ob), this.api.La("onMutedAutoplayEnds")) : this.hide())
    };
    Q2.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CD(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.rb(this.element);
        this.hide()
    };
    g.w(R2, g.W);
    R2.prototype.j = function() {
        var a = this.api.vb(),
            b = this.api.getVideoData();
        this.api.S().L("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.V(a, 2) ? this.ob || (g.W.prototype.show.call(this), this.B.start(), this.api.Ua(this.element, this.ob)) : this.hide()
    };
    R2.prototype.u = function() {
        g.O(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    R2.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CD(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.rb(this.element)
    };
    g.w(S2, g.W);
    g.h = S2.prototype;
    g.h.hide = function() {
        g.rp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    g.h.tY = function() {
        this.D = !0;
        g.rp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.h.uY = function() {
        this.D = !1;
        g.N(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.focus()
    };
    g.h.kU = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.h.lU = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.h.Rn = function() {
        this.ub(this.api.Va().getPlayerSize())
    };
    g.h.Xc = function(a) {
        if (!(g.V(a.state, 1) || g.V(a.state, 16) || g.V(a.state, 32))) {
            var b = !this.api.S().L("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.V(a.state, 1024);
            !g.V(a.state, 4) || g.V(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.N(this.api.getRootNode(), "ytp-expand-pause-overlay"), T2(this)), this.C.show(), this.W = (0, g.R)())
        }
    };
    g.h.ub = function(a) {
        var b = 16 / 9,
            c = this.I.Ff();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].ya("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.V = b;
        this.containerWidth = a;
        this.u = 0;
        this.suggestions.element.scrollLeft = -0;
        T2(this)
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.S(),
            b = this.api.getVideoData();
        this.J = b.D ? !1 : a.j;
        b.suggestions ? this.suggestionData = g.sn(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        HWa(this);
        b.D ? this.title.update({
            title: g.rF("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "Video kh\u00e1c"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.oh(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        T2(this)
    };
    g.w(U2, g.W);
    g.h = U2.prototype;
    g.h.TJ = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.S();
        a = (a.mutedAutoplay || c.Kc && !g.V(this.state, 2)) && !(b && c.pfpChazalUi);
        g.HG(this, a);
        this.api.Ua(this.element, a)
    };
    g.h.onStateChange = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.TJ()
    };
    g.h.onVideoDataChange = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.Ha("url", a);
            this.j || (this.j = this.Ja("click", this.onClick))
        } else this.j && (this.Ha("url", null), this.wc(this.j), this.j = null)
    };
    g.h.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.HH(a), !1, !0, !0);
        g.nK(b, this.api, a);
        this.api.rb(this.element)
    };
    g.h.ub = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.W(I2()),
                c = this.ya("ytp-watermark");
            g.O(c, "ytp-watermark-small", a);
            g.Qh(c);
            b.xa(c);
            this.u = a
        }
    };
    g.w(V2, g.CJ);
    g.h = V2.prototype;
    g.h.aj = function() {
        return !1
    };
    g.h.create = function() {
        var a = this.G.S(),
            b = g.eJ(this.G),
            c, d = null == (c = this.G.getVideoData()) ? void 0 : c.clientPlaybackNonce;
        d && g.$w("cpn", d);
        a.Bc && !a.C && (this.I = new S2(this.G, b), g.H(this, this.I), g.oJ(this.G, this.I.element, 4));
        a.L("embeds_enable_muted_autoplay") && (this.u = new R2(this.G), g.H(this, this.u), g.oJ(this.G, this.u.element, 4), this.D = new Q2(this.G), g.H(this, this.D), g.oJ(this.G, this.D.element, 4));
        if (a.Kc || this.u) this.watermark = new U2(this.G), g.H(this, this.watermark), g.oJ(this.G, this.watermark.element,
            8);
        this.B = new O2(this.G, b);
        g.H(this, this.B);
        g.oJ(this.G, this.B.element, 8);
        a.isMobile && (this.C = new P2(this.G), g.H(this, this.C), g.oJ(this.G, this.C.element, 4));
        this.j.P(this.G, "appresize", this.ub);
        this.j.P(this.G, "presentingplayerstatechange", this.Zg);
        this.j.P(this.G, "videodatachange", this.q1);
        this.j.P(this.G, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        a.L("embeds_web_enable_ads_event_logging") && (this.j.P(this.G, "onAdStart", this.onAdStart), this.j.P(this.G, "onAdComplete", this.onAdComplete), this.j.P(this.G,
            "onAdSkip", this.onAdSkip), this.j.P(this.G, "onAdStateChange", this.onAdStateChange));
        this.Tb(this.G.vb());
        this.player.hf("embed")
    };
    g.h.ub = function() {
        var a = this.G.Va().getPlayerSize();
        this.nf && this.nf.resize(a)
    };
    g.h.Zg = function(a) {
        this.Tb(a.state)
    };
    g.h.Tb = function(a) {
        g.V(a, 128) ? (this.nf || (this.nf = new M2(this.G), g.H(this, this.nf), g.oJ(this.G, this.nf.element, 4)), this.nf.u(a.getData()), this.nf.show(), g.N(this.G.getRootNode(), "ytp-embed-error")) : this.nf && (this.nf.dispose(), this.nf = null, g.rp(this.G.getRootNode(), "ytp-embed-error"))
    };
    g.h.onMutedAutoplayStarts = function() {
        this.G.getVideoData().mutedAutoplay && this.u && this.watermark && this.watermark.xa(this.u.bottomButtons, 0)
    };
    g.h.q1 = function() {
        var a = this.G.getVideoData();
        this.watermark && this.u && !a.mutedAutoplay && g.Vh(this.u.element, this.watermark.element) && g.oJ(this.G, this.watermark.element, 8)
    };
    g.h.onAdStart = function() {
        W2(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.h.onAdComplete = function() {
        W2(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.h.onAdSkip = function() {
        W2(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.h.onAdStateChange = function(a) {
        2 === a && W2(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.BJ("embed", V2);
})(_yt_player);