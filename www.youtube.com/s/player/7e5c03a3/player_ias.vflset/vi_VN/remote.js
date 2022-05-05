(function(g) {
    var window = this;
    'use strict';
    var e_a = function(a, b) {
            this.u = a >>> 0;
            this.j = b >>> 0
        },
        g_a = function(a) {
            if (!a) return f_a || (f_a = new e_a(0, 0));
            if (!/^\d+$/.test(a)) return null;
            g.Yc(a);
            return new e_a(g.Wc, g.Xc)
        },
        h_a = function(a, b, c) {
            null != c && ("string" === typeof c && g_a(c), g.Cd(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.Wc = b, g.Xc = c, g.Ad(a, g.Wc), g.Ad(a, g.Xc)) : (c = g_a(c), a = a.j, b = c.j, g.Ad(a, c.u), g.Ad(a, b)))
        },
        i_a = function(a, b, c) {
            b = g.$d(b, c);
            null != b && (g.Cd(a, c, 0), a.j.j.push(b ? 1 : 0))
        },
        j_a = function(a, b) {
            b = b instanceof g.Ng ? b : g.Tg(b, /^data:image\//i.test(b));
            a.src = g.Og(b)
        },
        l_a = function(a) {
            g.F.call(this, a, -1, k_a)
        },
        m_a = function(a) {
            g.F.call(this, a)
        },
        n_a = function(a) {
            g.F.call(this, a)
        },
        o_a = function(a) {
            g.F.call(this, a)
        },
        p_a = function(a) {
            g.F.call(this, a)
        },
        m6 = function(a) {
            g.nk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36));
            return a
        },
        n6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Uda(a.B, b, c)
        },
        q_a = function(a) {
            if (a instanceof g.nn) return a;
            if ("function" == typeof a.Ki) return a.Ki(!1);
            if (g.Ma(a)) {
                var b = 0,
                    c = new g.nn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.r_;
                        if (b in a) return g.on(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        r_a = function(a, b, c) {
            if (g.Ma(a)) g.mc(a, b, c);
            else
                for (a = q_a(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        s_a = function(a, b) {
            var c = [];
            r_a(b, function(d) {
                try {
                    var e = g.Op.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Gia(e) && c.push(d)
            }, a);
            return c
        },
        t_a = function(a, b) {
            s_a(a, b).forEach(function(c) {
                g.Op.prototype.remove.call(this, c)
            }, a)
        },
        u_a = function(a) {
            if (a.Y) {
                if (a.Y.locationOverrideToken) return {
                    locationOverrideToken: a.Y.locationOverrideToken
                };
                if (null != a.Y.latitudeE7 && null != a.Y.longitudeE7) return {
                    latitudeE7: a.Y.latitudeE7,
                    longitudeE7: a.Y.longitudeE7
                }
            }
            return null
        },
        v_a = function(a, b) {
            g.Ub(a, b) || a.push(b)
        },
        o6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        w_a = function(a, b) {
            return g.Nf(a, b)
        },
        x_a = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        p6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return x_a(a)
        },
        y_a = function(a, b, c, d) {
            var e = new g.fk(null);
            a && g.gk(e, a);
            b && g.hk(e, b);
            c && g.ik(e, c);
            d && (e.J = d);
            return e
        },
        q6 = function(a, b) {
            g.ru[a] = !0;
            var c = g.pu();
            c && c.publish.apply(c, arguments);
            g.ru[a] = !1
        },
        r6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.xp;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", z_a(this, a.capabilities || ""), A_a(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        z_a = function(a, b) {
            a.capabilities.clear();
            g.sn(b.split(","), g.Sa(w_a, B_a)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        A_a = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        s6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        t6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        C_a = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        D_a = function(a) {
            return new s6(a)
        },
        E_a = function(a) {
            return Array.isArray(a) ? g.Bl(a, D_a) : []
        },
        u6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        v6 = function(a) {
            return Array.isArray(a) ? "[" + g.Bl(a, u6).join(",") + "]" : "null"
        },
        w6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        F_a = function(a) {
            return g.Bl(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        x6 = function(a, b) {
            return g.Qb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        y6 = function(a, b) {
            return g.Qb(a, function(c) {
                return t6(c, b)
            })
        },
        G_a = function() {
            var a = (0, g.Qv)();
            a && t_a(a, a.j.Ki(!0))
        },
        z6 = function() {
            var a = g.Tv("yt-remote-connected-devices") || [];
            g.jc(a);
            return a
        },
        H_a = function(a) {
            if (g.Vb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Bl(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        I_a = function(a) {
            g.Sv("yt-remote-connected-devices", a, 86400)
        },
        B6 = function() {
            if (A6) return A6;
            var a = g.Tv("yt-remote-device-id");
            a || (a = w6(), g.Sv("yt-remote-device-id", a, 31536E3));
            for (var b = z6(), c = 1, d = a; g.Ub(b, d);) c++, d = a + "#" + c;
            return A6 = d
        },
        C6 = function() {
            var a = z6(),
                b = B6();
            g.Vv() && g.lc(a, b);
            a = H_a(a);
            if (g.Vb(a)) try {
                g.lma("remote_sid")
            } catch (c) {} else try {
                g.rr("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        J_a = function() {
            return g.Tv("yt-remote-session-browser-channel")
        },
        K_a = function() {
            return g.Tv("yt-remote-local-screens") || []
        },
        L_a = function() {
            g.Sv("yt-remote-lounge-token-expiration", !0, 86400)
        },
        M_a = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Bl(K_a(), function(d) {
                    return d.loungeToken
                }),
                c = g.Bl(a, function(d) {
                    return d.loungeToken
                });
            g.Cl(c, function(d) {
                return !g.Ub(b, d)
            }) && L_a();
            g.Sv("yt-remote-local-screens", a, 31536E3)
        },
        D6 = function(a) {
            a || (g.Uv("yt-remote-session-screen-id"), g.Uv("yt-remote-session-video-id"));
            C6();
            a = z6();
            g.Zb(a, B6());
            I_a(a)
        },
        N_a = function() {
            if (!E6) {
                var a = g.Xp();
                a && (E6 = new g.Lp(a))
            }
        },
        O_a = function() {
            N_a();
            return E6 ? !!E6.get("yt-remote-use-staging-server") : !1
        },
        F6 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        P_a = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Q_a = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        G6 = function(a) {
            a.length ? R_a(a.shift(), function() {
                G6(a)
            }) : H6()
        },
        S_a = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        R_a = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Gj(d, g.Lg(a));
            (document.head || document.documentElement).appendChild(d)
        },
        T_a = function() {
            var a = F6(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        H6 = function() {
            var a = Q_a();
            a && a(!1, "No cast extension found")
        },
        I6 = function() {
            if (U_a) {
                var a = 2,
                    b = Q_a(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                R_a("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", H6, c)
            }
        },
        V_a = function() {
            I6();
            var a = T_a();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        X_a = function() {
            I6();
            var a = T_a();
            a.push.apply(a, g.u(W_a.map(S_a)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        Y_a = function() {
            this.j = J6();
            this.j.xA("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")
        },
        Z_a = function() {
            this.j = J6();
            this.j.xA("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        $_a = function() {
            this.j = J6();
            this.j.xA("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        K6 = function(a, b, c) {
            g.G.call(this);
            this.I = null != c ? (0, g.Ra)(a, c) : a;
            this.Ug = b;
            this.D = (0, g.Ra)(this.zU, this);
            this.j = !1;
            this.u = 0;
            this.B = this.pc = null;
            this.C = []
        },
        L6 = function(a, b, c) {
            g.G.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Ug = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.pc = null
        },
        M6 = function(a) {
            a.pc = g.pi(function() {
                a.pc = null;
                a.j && !a.u && (a.j = !1, M6(a))
            }, a.Ug);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        N6 = function() {},
        O6 = function() {
            g.rf.call(this, "p")
        },
        P6 = function() {
            g.rf.call(this, "o")
        },
        a0a = function() {
            var a = new g.C.TextEncoder;
            return new g.C.ReadableStream({
                start: function(b) {
                    for (var c = g.r(["test\r\n", "test\r\n"]), d = c.next(); !d.done; d = c.next()) b.enqueue(a.encode(d.value));
                    b.close()
                }
            })
        },
        b0a = function(a) {
            return (a = /\/\/([^\/]+)\//.exec(a)) ? a[1].endsWith("google.com") : !1
        },
        d0a = function(a, b) {
            if (!c0a) {
                c0a = !0;
                var c;
                a: {
                    if (c = g.C.navigator)
                        if (c = c.userAgent) break a;c = ""
                }(-1 == c.indexOf("Chrome") || -1 != c.indexOf("Edg") ? 0 : 90 <= parseInt(/Chrome\/(\d+)/.exec(c)[1], 10)) && b0a(a) && window && window.document && b0a(window.document.URL) && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = "A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                    document.head.appendChild(c), (new Request("", {
                        body: new ReadableStream,
                        method: "POST"
                    })).headers.has("Content-Type") || (g.C.fetch(a + "?ot=1", {
                        method: "POST",
                        body: "test\r\n"
                    }).catch(b), g.C.fetch(a + "?ot=2", {
                        method: "POST",
                        body: a0a(),
                        mV: !1
                    }).catch(b), g.C.fetch(a + "?ot=3", {
                        method: "POST",
                        body: a0a(),
                        mV: !0
                    }).catch(b)))
            }
        },
        Q6 = function() {
            return e0a = e0a || new g.qg
        },
        f0a = function(a) {
            g.rf.call(this, "serverreachability", a)
        },
        R6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new f0a(b, a))
        },
        g0a = function(a, b) {
            g.rf.call(this, "statevent", a);
            this.stat = b
        },
        S6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new g0a(b, a))
        },
        h0a = function(a, b, c, d) {
            g.rf.call(this, "timingevent", a);
            this.size = b;
            this.Bv = d
        },
        T6 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        U6 = function() {},
        V6 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.Kc = c;
            this.Bc = d || 1;
            this.Za = new g.sk(this);
            this.ib = 45E3;
            a = g.EC ? 125 : void 0;
            this.eb = new g.oi(a);
            this.Fa = null;
            this.B = !1;
            this.N = this.Ta = this.J = this.Ia = this.oa = this.Fb = this.V = null;
            this.Y = [];
            this.j = null;
            this.W = 0;
            this.I = this.ma = null;
            this.Gb = -1;
            this.Da = !1;
            this.gb = 0;
            this.Ra = null;
            this.qc = this.Qa = this.Sb = this.va = !1;
            this.u = new i0a
        },
        i0a = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        W6 = function(a, b, c) {
            a.Ia = 1;
            a.J = m6(b.clone());
            a.N = c;
            a.va = !0;
            j0a(a, null)
        },
        j0a = function(a, b) {
            a.oa = Date.now();
            X6(a);
            a.Ta = a.J.clone();
            n6(a.Ta, "t", a.Bc);
            a.W = 0;
            var c = a.D.Ia;
            a.u = new i0a;
            a.j = k0a(a.D, c ? b : null, !a.N);
            0 < a.gb && (a.Ra = new L6((0, g.Ra)(a.qK, a, a.j), a.gb));
            a.Za.Ja(a.j, "readystatechange", a.DS);
            b = a.Fa ? g.Vf(a.Fa) : {};
            a.N ? (a.ma || (a.ma = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Ta, a.ma, a.N, b)) : (a.ma = "GET", a.j.send(a.Ta, a.ma, null, b));
            R6(1)
        },
        l0a = function(a) {
            return a.j ? "GET" == a.ma && 2 != a.Ia && a.D.yg : !1
        },
        n0a = function(a, b, c) {
            for (var d = !0, e; !a.Da && a.W < c.length;)
                if (e = m0a(a, c), e == Y6) {
                    4 == b &&
                        (a.I = 4, S6(14), d = !1);
                    break
                } else if (e == Z6) {
                a.I = 4;
                S6(15);
                d = !1;
                break
            } else $6(a, e);
            l0a(a) && e != Y6 && e != Z6 && (a.u.j = "", a.W = 0);
            4 != b || 0 != c.length || a.u.u || (a.I = 1, S6(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.qc && (a.qc = !0, a.D.TH(a)) : (a7(a), b7(a))
        },
        m0a = function(a, b) {
            var c = a.W,
                d = b.indexOf("\n", c);
            if (-1 == d) return Y6;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Z6;
            d += 1;
            if (d + c > b.length) return Y6;
            b = b.slice(d, d + c);
            a.W = d + c;
            return b
        },
        X6 = function(a) {
            a.Fb = Date.now() + a.ib;
            o0a(a, a.ib)
        },
        o0a = function(a, b) {
            if (null != a.V) throw Error("WatchDog timer not null");
            a.V = T6((0, g.Ra)(a.BS, a), b)
        },
        c7 = function(a) {
            a.V && (g.C.clearTimeout(a.V), a.V = null)
        },
        b7 = function(a) {
            a.D.Gf() || a.Da || p0a(a.D, a)
        },
        a7 = function(a) {
            c7(a);
            g.of(a.Ra);
            a.Ra = null;
            a.eb.stop();
            g.tk(a.Za);
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        $6 = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.Wf && (c.j == a || d7(c.u, a)))
                    if (!a.Qa && d7(c.u, a) && 3 == c.Wf) {
                        try {
                            var d = c.Ce.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.N) {
                                    if (c.j)
                                        if (c.j.oa + 3E3 < a.oa) e7(c), f7(c);
                                        else break a;
                                    g7(c);
                                    S6(18)
                                }
                            }
                            else c.Fd = e[1], 0 < c.Fd - c.Qa && 37500 > e[2] && c.eb && 0 == c.Y && !c.W && (c.W = T6((0, g.Ra)(c.ES, c), 6E3));
                            if (1 >= h7(c.u) && c.Zc) {
                                try {
                                    c.Zc()
                                } catch (y) {}
                                c.Zc = void 0
                            }
                        } else i7(c, 11)
                    } else if ((a.Qa || c.j == a) && e7(c), !g.jb(b))
                    for (e = c.Ce.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Qa = f[0];
                        f = f[1];
                        if (2 == c.Wf)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.qc = f[2];
                                var k = f[3];
                                null != k && (c.rK = k);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Ta = 1.5 * l);
                                d = c;
                                var m = a.j;
                                if (m) {
                                    var n = g.oj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.lb(n, "spdy") || g.lb(n, "quic") || g.lb(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (j7(p, p.u), p.u = null))
                                    }
                                    if (d.va) {
                                        var q = g.oj(m, "X-HTTP-Session-Id");
                                        q && (d.me = q, g.nk(d.Fa, d.va, q))
                                    }
                                }
                                c.Wf = 3;
                                c.D && c.D.xK();
                                c.Rc && (c.bd = Date.now() - a.oa);
                                d = c;
                                var t = a;
                                d.od = q0a(d, d.Ia ? d.qc : null, d.Bc);
                                if (t.Qa) {
                                    r0a(d.u, t);
                                    var v =
                                        t,
                                        x = d.Ta;
                                    x && v.setTimeout(x);
                                    v.V && (c7(v), X6(v));
                                    d.j = t
                                } else s0a(d);
                                0 < c.B.length && k7(c)
                            } else "stop" != f[0] && "close" != f[0] || i7(c, 7);
                        else 3 == c.Wf && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? i7(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.wK(f), c.Y = 0)
                    }
                R6(4)
            } catch (y) {}
        },
        t0a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        u0a = function(a) {
            this.D = a || 10;
            g.C.PerformanceNavigationTiming ? (a = g.C.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.C.chrome && g.C.chrome.loadTimes && g.C.chrome.loadTimes() && g.C.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        v0a = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        h7 = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        d7 = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        j7 = function(a,
            b) {
            a.j ? a.j.add(b) : a.u = b
        },
        r0a = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        l7 = function(a) {
            if (null != a.u) return a.B.concat(a.u.Y);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.r(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.Y);
                return b
            }
            return g.bc(a.B)
        },
        w0a = function(a, b) {
            var c = new U6;
            if (g.C.Image) {
                var d = new Image;
                d.onload = g.Sa(m7, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Sa(m7, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Sa(m7, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Sa(m7, c, d, "TestLoadImage: timeout", !1, b);
                g.C.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        m7 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        x0a = function() {
            this.j = new N6
        },
        y0a = function(a, b, c) {
            var d = c || "";
            try {
                g.ek(a, function(e, f) {
                    var k = e;
                    g.Na(e) && (k = g.Gi(e));
                    b.push(d + f + "=" + encodeURIComponent(k))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        n7 = function(a, b, c) {
            return c && c.XW ? c.XW[a] || b : b
        },
        z0a = function(a) {
            this.B = [];
            this.qc = this.od = this.Fa = this.Bc = this.j = this.me = this.va = this.Da = this.J = this.Fb = this.V = null;
            this.Me = this.Ra = 0;
            this.Ke = n7("failFast", !1, a);
            this.eb = this.W = this.N = this.I = this.D = null;
            this.Kc = !0;
            this.Md = this.Fd = this.Qa = -1;
            this.Sb = this.Y = this.oa = 0;
            this.Je = n7("baseRetryDelayMs", 5E3, a);
            this.Ne = n7("retryDelaySeedMs", 1E4, a);
            this.Le = n7("forwardChannelMaxRetries", 2, a);
            this.rd = n7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.le = a && a.nka || void 0;
            this.yg = a && a.lka || !1;
            this.Ta = void 0;
            this.Ia = a && a.J0 || !1;
            this.C = "";
            this.u =
                new u0a(a && a.dja);
            this.Ce = new x0a;
            this.ib = a && a.sja || !1;
            this.gb = a && a.kja || !1;
            this.ib && this.gb && (this.gb = !1);
            this.kf = a && a.Yia || !1;
            a && a.uja && (this.Kc = !1);
            this.Rc = !this.ib && this.Kc && a && a.hja || !1;
            this.Zc = void 0;
            this.bd = 0;
            this.Za = !1;
            this.ma = null;
            this.lf = !a || !1 !== a.jja;
            this.Gb = null
        },
        f7 = function(a) {
            a.j && (o7(a), a.j.cancel(), a.j = null)
        },
        A0a = function(a) {
            f7(a);
            a.N && (g.C.clearTimeout(a.N), a.N = null);
            e7(a);
            a.u.cancel();
            a.I && ("number" === typeof a.I && g.C.clearTimeout(a.I), a.I = null)
        },
        k7 = function(a) {
            v0a(a.u) || a.I || (a.I = !0, g.fi(a.tK, a), a.oa = 0)
        },
        C0a = function(a, b) {
            if (h7(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.Y.concat(a.B), !0;
            if (1 == a.Wf || 2 == a.Wf || a.oa >= (a.Ke ? 0 : a.Le)) return !1;
            a.I = T6((0, g.Ra)(a.tK, a, b), B0a(a, a.oa));
            a.oa++;
            return !0
        },
        E0a = function(a, b) {
            var c;
            b ? c = b.Kc : c = a.Ra++;
            var d = a.Fa.clone();
            g.nk(d, "SID", a.C);
            g.nk(d, "RID", c);
            g.nk(d, "AID", a.Qa);
            p7(a, d);
            a.J && a.V && g.rk(d, a.J, a.V);
            c = new V6(a, a.C, c, a.oa + 1);
            null === a.J && (c.Fa = a.V);
            b && (a.B = b.Y.concat(a.B));
            b = D0a(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.rd) + Math.round(.5 * a.rd * Math.random()));
            j7(a.u, c);
            W6(c, d, b)
        },
        p7 = function(a, b) {
            a.Da && g.Bf(a.Da, function(c, d) {
                g.nk(b, d, c)
            });
            a.D && g.ek({}, function(c, d) {
                g.nk(b, d, c)
            })
        },
        D0a = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Ra)(a.D.GS, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var k = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, k.push("ofs=" + f)) : f = 0 : k.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        y0a(p, k, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = k.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.Y = a;
            return d
        },
        s0a = function(a) {
            a.j || a.N || (a.Sb = 1, g.fi(a.sK, a), a.Y = 0)
        },
        g7 = function(a) {
            if (a.j || a.N || 3 <= a.Y) return !1;
            a.Sb++;
            a.N = T6((0, g.Ra)(a.sK, a), B0a(a, a.Y));
            a.Y++;
            return !0
        },
        o7 = function(a) {
            null != a.ma && (g.C.clearTimeout(a.ma), a.ma = null)
        },
        F0a = function(a) {
            a.j = new V6(a, a.C, "rpc", a.Sb);
            null === a.J && (a.j.Fa = a.V);
            a.j.gb = 0;
            var b = a.od.clone();
            g.nk(b, "RID", "rpc");
            g.nk(b, "SID", a.C);
            g.nk(b, "CI", a.eb ? "0" : "1");
            g.nk(b, "AID", a.Qa);
            g.nk(b, "TYPE", "xmlhttp");
            p7(a, b);
            a.J && a.V && g.rk(b, a.J, a.V);
            a.Ta && a.j.setTimeout(a.Ta);
            var c = a.j;
            a = a.qc;
            c.Ia = 1;
            c.J = m6(b.clone());
            c.N = null;
            c.va = !0;
            j0a(c, a)
        },
        e7 = function(a) {
            null != a.W && (g.C.clearTimeout(a.W), a.W = null)
        },
        p0a = function(a, b) {
            var c = null;
            if (a.j == b) {
                e7(a);
                o7(a);
                a.j = null;
                var d = 2
            } else if (d7(a.u, b)) c = b.Y, r0a(a.u, b), d = 1;
            else return;
            if (0 != a.Wf)
                if (a.Md = b.Gb, b.B)
                    if (1 == d) {
                        c = b.N ? b.N.length : 0;
                        b = Date.now() - b.oa;
                        var e = a.oa;
                        d = Q6();
                        d.dispatchEvent(new h0a(d, c, b, e));
                        k7(a)
                    } else s0a(a);
            else if (e = b.getLastError(), 3 == e || 0 == e && 0 < a.Md || !(1 == d && C0a(a, b) || 2 == d && g7(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                case 1:
                    i7(a, 5);
                    break;
                case 4:
                    i7(a, 10);
                    break;
                case 3:
                    i7(a, 6);
                    break;
                default:
                    i7(a, 2)
            }
        },
        B0a = function(a, b) {
            var c = a.Je + Math.floor(Math.random() * a.Ne);
            a.isActive() || (c *= 2);
            return c * b
        },
        i7 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Ra)(a.P0, a);
                c || (c = new g.fk("//www.google.com/images/cleardot.gif"), g.C.location && "http" == g.C.location.protocol || g.gk(c, "https"), m6(c));
                w0a(c.toString(), d)
            } else S6(2);
            a.Wf = 0;
            a.D && a.D.vK(b);
            G0a(a);
            A0a(a)
        },
        G0a = function(a) {
            a.Wf = 0;
            a.Gb = [];
            if (a.D) {
                var b = l7(a.u);
                if (0 != b.length || 0 != a.B.length) g.cc(a.Gb, b), g.cc(a.Gb, a.B), a.u.B.length = 0, g.bc(a.B), a.B.length = 0;
                a.D.uK()
            }
        },
        H0a = function(a) {
            if (0 == a.Wf) return a.Gb;
            var b = [];
            g.cc(b, l7(a.u));
            g.cc(b, a.B);
            return b
        },
        q0a = function(a, b, c) {
            var d = g.ok(c);
            "" != d.j ? (b && g.hk(d, b + "." + d.j), g.ik(d, d.u)) : (d = g.C.location, d = y_a(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.va;
            c = a.me;
            b && c && g.nk(d, b, c);
            g.nk(d, "VER", a.rK);
            p7(a, d);
            return d
        },
        k0a = function(a, b, c) {
            if (b && !a.Ia) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.yg && !a.le ? new g.Xi(new g.ak({
                kR: !0
            })) : new g.Xi(a.le);
            b.J = a.Ia;
            return b
        },
        I0a = function() {},
        J0a = function() {
            if (g.Fc && !g.uc(10)) throw Error("Environmental error: no available transport.");
        },
        r7 = function(a, b) {
            g.qg.call(this);
            this.j = new z0a(b);
            this.I = a;
            this.u = b && b.zX || null;
            a = b && b.yX || null;
            b && b.cja && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.V = a;
            a = b && b.yja || null;
            b && b.WO && (a ? a["X-WebChannel-Content-Type"] = b.WO : a = {
                "X-WebChannel-Content-Type": b.WO
            });
            b && b.PM && (a ? a["X-WebChannel-Client-Profile"] = b.PM : a = {
                "X-WebChannel-Client-Profile": b.PM
            });
            this.j.Fb = a;
            (a = b && b.wja) && !g.jb(a) && (this.j.J = a);
            this.J = b && b.J0 || !1;
            this.D = b && b.Zja || !1;
            (b = b && b.TW) && !g.jb(b) && (this.j.va = b, g.Mf(this.u, b) && g.Sf(this.u,
                b));
            this.C = new q7(this)
        },
        K0a = function(a) {
            O6.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.metadataKey = g.Gf(b)) ? g.Tf(b, this.metadataKey) : b : this.data = a
        },
        L0a = function(a) {
            P6.call(this);
            this.status = 1;
            this.errorCode = a
        },
        q7 = function(a) {
            this.j = a
        },
        M0a = function(a, b) {
            this.u = a;
            this.j = b
        },
        N0a = function(a) {
            return H0a(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? x_a(b) : b);
                return b
            })
        },
        s7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        u7 = function(a) {
            t7.dispatchEvent(new O0a(t7, a))
        },
        O0a = function(a, b) {
            g.rf.call(this, "statevent", a);
            this.stat = b
        },
        v7 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.J = c;
            this.I = d || 1;
            this.u = 45E3;
            this.B = new g.sk(this);
            this.D = new g.oi;
            this.D.setInterval(250)
        },
        Q0a = function(a, b, c) {
            a.Bt = 1;
            a.Co = m6(b.clone());
            a.zq = c;
            a.va = !0;
            P0a(a, null)
        },
        w7 = function(a, b, c, d, e) {
            a.Bt = 1;
            a.Co = m6(b.clone());
            a.zq = null;
            a.va = c;
            e && (a.VQ = !1);
            P0a(a, d)
        },
        P0a = function(a, b) {
            a.At = Date.now();
            x7(a);
            a.Eo = a.Co.clone();
            n6(a.Eo, "t", a.I);
            a.cA = 0;
            a.gh = a.j.cE(a.j.pw() ? b : null);
            0 < a.aE && (a.aA = new L6((0, g.Ra)(a.yK, a, a.gh), a.aE));
            a.B.Ja(a.gh, "readystatechange", a.IS);
            b = a.yq ? g.Vf(a.yq) : {};
            a.zq ? (a.bA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.gh.send(a.Eo, a.bA, a.zq, b)) : (a.bA = "GET", a.VQ && !g.vf && (b.Connection = "close"), a.gh.send(a.Eo, a.bA, null, b));
            a.j.Lk(1)
        },
        S0a = function(a, b) {
            var c = a.cA,
                d = b.indexOf("\n", c);
            if (-1 == d) return y7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return R0a;
            d += 1;
            if (d + c > b.length) return y7;
            b = b.slice(d, d + c);
            a.cA = d + c;
            return b
        },
        U0a = function(a, b) {
            a.At = Date.now();
            x7(a);
            var c = b ? window.location.hostname : "";
            a.Eo = a.Co.clone();
            g.nk(a.Eo, "DOMAIN", c);
            g.nk(a.Eo, "t", a.I);
            try {
                a.dl = new ActiveXObject("htmlfile")
            } catch (m) {
                z7(a);
                a.Do = 7;
                u7(22);
                A7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in B7) f = B7[f];
                        else if (f in T0a) f = B7[f] = T0a[f];
                        else {
                            var k = f.charCodeAt(0);
                            if (31 < k && 127 > k) var l = f;
                            else {
                                if (256 > k) {
                                    if (l = "\\x", 16 > k || 256 < k) l += "0"
                                } else l = "\\u", 4096 > k && (l += "0");
                                l += k.toString(16).toUpperCase()
                            }
                            f =
                                B7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.kh(g.Fg("b/12014412"), d);
            a.dl.open();
            a.dl.write(g.bh(c));
            a.dl.close();
            a.dl.parentWindow.m = (0, g.Ra)(a.z_, a);
            a.dl.parentWindow.d = (0, g.Ra)(a.aQ, a, !0);
            a.dl.parentWindow.rpcClose = (0, g.Ra)(a.aQ, a, !1);
            c = a.dl.createElement("DIV");
            a.dl.parentWindow.document.body.appendChild(c);
            d = g.Sg(a.Eo.toString());
            d = g.zh(g.Og(d));
            d = g.kh(g.Fg("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.sba(c, d);
            a.j.Lk(1)
        },
        x7 = function(a) {
            a.bE =
                Date.now() + a.u;
            V0a(a, a.u)
        },
        V0a = function(a, b) {
            if (null != a.Ct) throw Error("WatchDog timer not null");
            a.Ct = s7((0, g.Ra)(a.HS, a), b)
        },
        C7 = function(a) {
            a.Ct && (g.C.clearTimeout(a.Ct), a.Ct = null)
        },
        A7 = function(a) {
            a.j.Gf() || a.xq || a.j.dA(a)
        },
        z7 = function(a) {
            C7(a);
            g.of(a.aA);
            a.aA = null;
            a.D.stop();
            g.tk(a.B);
            if (a.gh) {
                var b = a.gh;
                a.gh = null;
                b.abort();
                b.dispose()
            }
            a.dl && (a.dl = null)
        },
        D7 = function(a, b) {
            try {
                a.j.zK(a, b), a.j.Lk(4)
            } catch (c) {}
        },
        X0a = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                W0a(a, b, function(k) {
                    k ? c(!0) : g.C.setTimeout(function() {
                        X0a(a, b, c, d, f)
                    }, f)
                })
            }
        },
        W0a = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    E7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            j_a(d, a)
        },
        E7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Y0a = function(a) {
            this.j = a;
            this.u = new N6
        },
        Z0a = function(a) {
            var b = F7(a.j, a.bx, "/mail/images/cleardot.gif");
            m6(b);
            X0a(b.toString(), 5E3, (0, g.Ra)(a.tV, a), 3, 2E3);
            a.Lk(1)
        },
        H7 = function(a) {
            var b = a.j.V;
            if (null != b) u7(5), b ? (u7(11), G7(a.j, a, !1)) : (u7(12), G7(a.j, a, !0));
            else if (a.Ih = new v7(a), a.Ih.yq = a.dE, b = a.j, b = F7(b, b.pw() ? a.ow : null, a.eE), u7(5), !g.Fc || g.uc(10)) n6(b, "TYPE", "xmlhttp"), w7(a.Ih, b, !1, a.ow, !1);
            else {
                n6(b, "TYPE", "html");
                var c = a.Ih;
                a = !!a.ow;
                c.Bt = 3;
                c.Co = m6(b.clone());
                U0a(c, a)
            }
        },
        I7 = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new N6;
            this.N = a || null;
            this.V = null != b ? b : null;
            this.J = c || !1
        },
        $0a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        a1a = function(a, b, c, d) {
            g.rf.call(this, "timingevent", a);
            this.size = b;
            this.Bv = d
        },
        b1a = function(a) {
            g.rf.call(this, "serverreachability", a)
        },
        c1a = function(a) {
            a.JS(1, 0);
            a.eA = F7(a, null, a.fE);
            J7(a)
        },
        d1a = function(a) {
            a.Ro && (a.Ro.abort(), a.Ro = null);
            a.uf && (a.uf.cancel(), a.uf = null);
            a.Lm && (g.C.clearTimeout(a.Lm), a.Lm = null);
            K7(a);
            a.Wh && (a.Wh.cancel(), a.Wh = null);
            a.Fo && (g.C.clearTimeout(a.Fo), a.Fo = null)
        },
        e1a = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new $0a(a.KS++, b));
            2 != a.j && 3 != a.j || J7(a)
        },
        f1a = function(a) {
            var b = 0;
            a.uf && b++;
            a.Wh && b++;
            return b
        },
        J7 = function(a) {
            a.Wh || a.Fo || (a.Fo = s7((0, g.Ra)(a.DK, a), 0), a.Et = 0)
        },
        h1a = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.uw = Math.floor(1E5 * Math.random());
                    b = a.uw++;
                    var c = new v7(a, "", b);
                    c.yq = a.Bl;
                    var d = L7(a),
                        e = a.eA.clone();
                    g.nk(e, "RID", b);
                    g.nk(e, "CVER", "1");
                    M7(a, e);
                    Q0a(c, e, d);
                    a.Wh = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? g1a(a, b) : 0 == a.u.length || a.Wh || g1a(a))
        },
        g1a = function(a, b) {
            if (b)
                if (6 < a.Aq) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.uw - 1;
                    b = L7(a)
                } else c = b.J, b = b.zq;
            else c = a.uw++, b = L7(a);
            var d = a.eA.clone();
            g.nk(d, "SID", a.C);
            g.nk(d, "RID", c);
            g.nk(d, "AID", a.Ft);
            M7(a, d);
            c = new v7(a, a.C, c, a.Et + 1);
            c.yq = a.Bl;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Wh = c;
            Q0a(c, d, b)
        },
        M7 = function(a, b) {
            a.Ng && (a = a.Ng.HK()) && g.Bf(a, function(c, d) {
                g.nk(b, d, c)
            })
        },
        L7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Aq && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    nt: e.nt
                }, f++) {
                e.nt = a.u[f].j;
                var k = a.u[f].map;
                e.nt = 6 >= a.Aq ? f : e.nt - d;
                try {
                    g.Bf(k, function(l) {
                        return function(m, n) {
                            c.push("req" + l.nt + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.nt + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        i1a = function(a) {
            a.uf || a.Lm || (a.I = 1, a.Lm = s7((0, g.Ra)(a.CK, a), 0), a.Dt = 0)
        },
        N7 = function(a) {
            if (a.uf || a.Lm || 3 <= a.Dt) return !1;
            a.I++;
            a.Lm = s7((0, g.Ra)(a.CK, a), j1a(a, a.Dt));
            a.Dt++;
            return !0
        },
        G7 = function(a, b, c) {
            a.AD = c;
            a.Cl = b.Km;
            a.J || c1a(a)
        },
        K7 = function(a) {
            null != a.Bq && (g.C.clearTimeout(a.Bq), a.Bq = null)
        },
        j1a = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        O7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Ng && (c = null);
                var d = (0, g.Ra)(a.O0, a);
                c || (c = new g.fk("//www.google.com/images/cleardot.gif"), m6(c));
                W0a(c.toString(), 1E4, d)
            } else u7(2);
            k1a(a, b)
        },
        k1a = function(a, b) {
            a.j = 0;
            a.Ng && a.Ng.EK(b);
            l1a(a);
            d1a(a)
        },
        l1a = function(a) {
            a.j = 0;
            a.Cl = -1;
            if (a.Ng)
                if (0 == a.B.length && 0 == a.u.length) a.Ng.gE();
                else {
                    var b = g.bc(a.B),
                        c = g.bc(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.Ng.gE(b, c)
                }
        },
        F7 = function(a, b, c) {
            var d = g.ok(c);
            if ("" != d.j) b && g.hk(d, b + "." + d.j), g.ik(d, d.u);
            else {
                var e = window.location;
                d = y_a(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.qw && g.Bf(a.qw, function(f, k) {
                g.nk(d, k, f)
            });
            g.nk(d, "VER", a.Aq);
            M7(a, d);
            return d
        },
        m1a = function() {},
        n1a = function() {
            this.j = [];
            this.u = []
        },
        o1a = function() {},
        J6 = function() {
            if (!P7) {
                P7 = new g.ri(new o1a);
                var a = g.Kq("client_streamz_web_flush_count", -1); - 1 !== a && (P7.C = a)
            }
            return P7
        },
        Q7 = function(a) {
            g.rf.call(this, "channelMessage");
            this.message = a
        },
        R7 = function(a) {
            g.rf.call(this, "channelError");
            this.error = a
        },
        p1a = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        S7 = function(a, b) {
            g.G.call(this);
            this.j = new g.L(this.r_, 0, this);
            g.H(this, this.j);
            this.Ug = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ra)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ra)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        T7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.oa = a;
            this.J = b;
            this.B = new g.Kp;
            this.u = new S7(this.r0, this);
            this.j = null;
            this.W = !1;
            this.I = null;
            this.V = "";
            this.N = this.D = 0;
            this.C = [];
            this.va = c;
            this.Y = d;
            this.Da = e;
            this.ma = new Y_a;
            this.Fa = new Z_a;
            this.Ia = new $_a
        },
        U7 = function(a) {
            if (a.j) {
                var b = a.Y(),
                    c = a.j.Bl || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Bl = c
            }
        },
        V7 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Mi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Ni(a) || "";
            a = g.rb();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.qb(a, "10.0") && (this.u = !1))
        },
        W7 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.Ti(c + b, {})
        },
        X7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Sa(a.C, d, !0),
                onError: g.Sa(a.B, e),
                onTimeout: g.Sa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.ir(b, a)
        },
        Y7 = function(a, b) {
            g.qg.call(this);
            var c = this;
            this.Nc = a();
            this.Nc.subscribe("handlerOpened", this.OS, this);
            this.Nc.subscribe("handlerClosed", this.MS, this);
            this.Nc.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Nc.subscribe("handlerMessage", this.NS, this);
            this.j = b
        },
        q1a = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new J0a : e;
            var f = void 0 === f ? new g.Kp : f;
            this.pathPrefix = a;
            this.j = b;
            this.ma = c;
            this.D = f;
            this.N = null;
            this.V = this.J = 0;
            this.channel = null;
            this.I = 0;
            this.B = new S7(function() {
                d.B.isActive();
                var k;
                0 === (null == (k = d.channel) ? void 0 : h7((new M0a(k, k.j)).j.u)) && d.connect(d.N, d.J)
            });
            this.C = {};
            this.u = {};
            this.W = !1;
            this.logger = null;
            this.oa = [];
            this.Y = void 0
        },
        r1a = function(a) {
            g.dg(a.channel, "m", function() {
                a.I = 3;
                a.B.reset();
                a.N = null;
                a.J = 0;
                for (var b = g.r(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.X("webChannelOpened")
            });
            g.dg(a.channel, "n", function() {
                a.I = 0;
                a.B.isActive() || a.X("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : N0a(new M0a(b, b.j));
                c && (a.oa = [].concat(g.u(c)))
            });
            g.dg(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.X("webChannelMessage", new p1a(c[0], c[1]));
                a.Y = b.statusCode
            });
            g.dg(a.channel, "o", function() {
                401 === a.Y || a.B.start();
                a.X("webChannelError")
            })
        },
        Z7 = function(a) {
            var b = a.ma();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        $7 = function(a) {
            g.qg.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.RS, this);
            this.j.subscribe("webChannelClosed", this.PS, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.QS, this)
        },
        s1a = function(a, b, c, d, e) {
            function f() {
                return new T7(W7(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Q("enable_mdx_web_channel_desktop") ? new $7(function() {
                return new q1a(W7(a, "/wc"), b, c)
            }) : new Y7(f, e)
        },
        w1a = function() {
            var a = t1a;
            u1a();
            a8.push(a);
            v1a()
        },
        b8 = function(a, b) {
            u1a();
            var c = x1a(a, String(b));
            g.Vb(a8) ? y1a(c) : (v1a(), g.mc(a8, function(d) {
                d(c)
            }))
        },
        c8 = function(a) {
            b8("CP", a)
        },
        u1a = function() {
            a8 || (a8 = g.Ja("yt.mdx.remote.debug.handlers_") || [], g.Ia("yt.mdx.remote.debug.handlers_", a8))
        },
        y1a = function(a) {
            var b = (d8 + 1) % 50;
            d8 = b;
            e8[b] = a;
            f8 || (f8 = 49 == b)
        },
        v1a = function() {
            var a = a8;
            if (e8[0]) {
                var b = f8 ? d8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e8[b];
                    g.mc(a, function(d) {
                        d(c)
                    })
                } while (b != d8);
                e8 = Array(50);
                d8 = -1;
                f8 = !1
            }
        },
        x1a = function(a, b) {
            var c = (Date.now() - z1a) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g8 = function(a) {
            g.Vu.call(this);
            this.I = a;
            this.screens = []
        },
        A1a = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        B1a = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.sn(a.screens, function(f) {
                return !!x6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = A1a(a, b[d]) || c;
            return c
        },
        C1a = function(a, b) {
            var c = a.screens.length;
            a.screens = g.sn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        h8 = function(a, b, c, d, e) {
            g.Vu.call(this);
            this.B = a;
            this.J = b;
            this.C = c;
            this.I = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.pc = NaN
        },
        j8 = function(a) {
            g8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            i8(this);
            this.info("Initializing with " + v6(this.screens))
        },
        D1a = function(a) {
            if (a.screens.length) {
                var b = g.Bl(a.screens, function(d) {
                        return d.id
                    }),
                    c = W7(a.u, "/pairing/get_lounge_token_batch");
                X7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ra)(a.sW, a), (0, g.Ra)(a.rW, a))
            }
        },
        i8 = function(a) {
            if (g.Q("deprecate_pair_servlet_enabled")) return B1a(a, []);
            var b = E_a(K_a());
            b = g.sn(b, function(c) {
                return !c.uuid
            });
            return B1a(a, b)
        },
        k8 = function(a, b) {
            M_a(g.Bl(a.screens, C_a));
            b && L_a()
        },
        m8 = function(a, b) {
            g.Vu.call(this);
            this.I = b;
            b = (b = g.Tv("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var k = d[e].id;
                c[k] = g.Ub(b, k)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            l8("Initialized with " + g.Gi(this.j))
        },
        n8 = function(a, b, c) {
            var d = W7(a.D, "/pairing/get_screen_availability");
            X7(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ra)(function(e) {
                e = e.screens || [];
                for (var f = 0, k = e.length; f < k; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ra)(function() {
                c(!1)
            }, a))
        },
        o8 = function(a, b) {
            a: if (o6(b) != o6(a.j)) var c = !1;
                else {
                    c = g.Jf(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.j[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l8("Updated online screens: " + g.Gi(a.j)), a.j = b, a.X("screenChange"));E1a(a)
        },
        p8 = function(a) {
            isNaN(a.B) || g.fr(a.B);
            a.B = g.dr((0, g.Ra)(a.HI, a), 0 < a.C && a.C < g.Ta() ? 2E4 : 1E4)
        },
        l8 = function(a) {
            b8("OnlineScreenService", a)
        },
        F1a = function(a) {
            var b = {};
            g.mc(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Xe("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        E1a = function(a) {
            a = g.Jf(g.Cf(a.j, function(b) {
                return b
            }));
            g.jc(a);
            a.length ? g.Sv("yt-remote-online-screen-ids", a.join(","), 60) : g.Uv("yt-remote-online-screen-ids")
        },
        q8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g8.call(this, "ScreenService");
            this.C = a;
            this.J = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            G1a(this)
        },
        I1a = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var k = a.Pi(),
                l = c ? y6(k, c) : null;
            c && (a.J || l) || (l = y6(k, b));
            if (l) {
                l.uuid = b;
                var m = r8(a, l);
                n8(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? H1a(a, c, (0, g.Ra)(function(n) {
                var p = r8(this, new s6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                n8(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        J1a = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        K1a = function(a, b, c) {
            n8(a.j, b, c)
        },
        H1a = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, k) {
                    f = k && k.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.ir(W7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        L1a = function(a) {
            a.screens = a.u.Pi();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + v6(a.screens))
        },
        G1a = function(a) {
            s8(a);
            a.u = new j8(a.C);
            a.u.subscribe("screenChange", (0, g.Ra)(a.DW, a));
            L1a(a);
            a.J || (a.B = E_a(g.Tv("yt-remote-automatic-screen-cache") || []));
            s8(a);
            a.info("Initializing automatic screens: " + v6(a.B));
            a.j = new m8(a.C, (0, g.Ra)(a.Pi, a, !0));
            a.j.subscribe("screenChange", (0, g.Ra)(function() {
                this.X("onlineScreenChange")
            }, a))
        },
        r8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = y6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || M1a(a));
            s8(a);
            a.D[b.uuid] = b.id;
            g.Sv("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        M1a = function(a) {
            a = g.sn(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Sv("yt-remote-automatic-screen-cache", g.Bl(a, C_a))
        },
        s8 = function(a) {
            a.D = g.Tv("yt-remote-device-id-map") || {}
        },
        t8 = function(a, b, c) {
            g.Vu.call(this);
            this.va = c;
            this.B = a;
            this.j = b;
            this.C = null
        },
        u8 = function(a, b) {
            a.C = b;
            a.X("sessionScreen", a.C)
        },
        N1a = function(a, b) {
            a.C && (a.C.token = b, r8(a.B, a.C));
            a.X("sessionScreen", a.C)
        },
        v8 = function(a, b) {
            b8(a.va, b)
        },
        w8 = function(a, b, c) {
            t8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.Y = (0, g.Ra)(this.XS, this);
            this.ma = (0, g.Ra)(this.J_, this);
            this.W = g.dr(function() {
                O1a(d, null)
            }, 12E4);
            this.J = this.D = this.I = this.N = 0;
            this.oa = !1;
            this.V = "unknown"
        },
        x8 = function(a, b) {
            g.fr(a.J);
            a.J = 0;
            0 == b ? P1a(a) : a.J = g.dr(function() {
                P1a(a)
            }, b)
        },
        P1a = function(a) {
            Q1a(a, "getLoungeToken");
            g.fr(a.D);
            a.D = g.dr(function() {
                R1a(a, null)
            }, 3E4)
        },
        Q1a = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Gi());
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ra)(function() {
                v8(this, "Failed to send message: " + b + ".")
            }, a)) : v8(a, "Sending yt message without session: " + g.Gi(c))
        },
        y8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.JN(b, function(c) {
                u8(a, c)
            }, function() {
                return a.uh()
            }, 5)) : a.uh(Error("Waiting for session status timed out."))
        },
        T1a = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " +
                JSON.stringify(b));
            var d = new s6(b);
            S1a(a, d, function(e) {
                e ? (a.oa = !0, r8(a.B, d), u8(a, d), a.V = "unknown", x8(a, c)) : (g.Oq(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.uh())
            }, 5)
        },
        O1a = function(a, b) {
            g.fr(a.W);
            a.W = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? T1a(a, {
                name: a.j.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.Oq(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), y8(a, b.screenId))) : (g.Oq(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), y8(a, b.screenId)) : y8(a, b.screenId) : a.uh(Error("Waiting for session status timed out."))
        },
        R1a = function(a, b) {
            g.fr(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, x8(a, 3E4)) : (N1a(a, b.loungeToken), a.oa = !1, a.V = "unknown", x8(a, b.loungeTokenRefreshIntervalMs))
        },
        S1a = function(a, b, c, d) {
            g.fr(a.I);
            a.I = 0;
            K1a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.dr(function() {
                    S1a(a, b, c, d - 1)
                }, 300)
            })
        },
        U1a = function(a) {
            g.fr(a.N);
            a.N = 0;
            g.fr(a.I);
            a.I = 0;
            g.fr(a.W);
            a.W = 0;
            g.fr(a.D);
            a.D = 0;
            g.fr(a.J);
            a.J = 0
        },
        z8 = function(a, b, c, d) {
            t8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.N = null;
            this.ma = "";
            this.Ia = c;
            this.Fa = null;
            this.W = function() {};
            this.V = NaN;
            this.Da = (0, g.Ra)(this.YS, this);
            this.D = function() {};
            this.J = this.I = 0;
            this.Y = !1;
            this.oa = "unknown"
        },
        A8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        V1a = function(a) {
            a.D = a.B.JK(a.ma, a.j.label, a.j.friendlyName, A8(a), function(b, c) {
                a.D = function() {};
                a.Y = !0;
                u8(a, b);
                "shortLived" == b.idType && 0 < c && B8(a, c)
            }, function(b) {
                a.D = function() {};
                a.uh(b)
            })
        },
        W1a = function(a) {
            var b = {};
            b.pairingCode = a.ma;
            b.theme = a.Ia;
            O_a() && (b.env_useStageMdx = 1);
            return g.Ri(b)
        },
        C8 = function(a) {
            return new Promise(function(b) {
                a.ma = w6();
                if (a.Fa) {
                    var c = new chrome.cast.DialLaunchResponse(!0, W1a(a));
                    b(c);
                    V1a(a)
                } else a.W = function() {
                    g.fr(a.V);
                    a.W = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, W1a(a));
                    b(d);
                    V1a(a)
                }, a.V = g.dr(function() {
                    a.W()
                }, 100)
            })
        },
        Y1a = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new s6(b);
            return (new Promise(function(e) {
                X1a(a, d, function(f) {
                    f ? (a.Y = !0, r8(a.B, d), u8(a, d), B8(a, c)) : g.Oq(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        Z1a = function(a, b) {
            var c = a.N.receiver.label,
                d = a.j.friendlyName;
            return (new Promise(function(e) {
                I1a(a.B, c, b, d, function(f) {
                    f && f.token && u8(a, f);
                    e(f)
                }, function(f) {
                    v8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        X1a = function(a, b, c, d) {
            g.fr(a.I);
            a.I = 0;
            K1a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.dr(function() {
                    X1a(a, b, c, d - 1)
                }, 300)
            })
        },
        B8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            A8(a) && (g.fr(a.J), a.J = 0, 0 == b ? $1a(a) : a.J = g.dr(function() {
                $1a(a)
            }, b))
        },
        $1a = function(a) {
            A8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.oa = c, B8(a, 3E4)) : (a.Y = !1, a.oa = "unknown", N1a(a, b.loungeToken), B8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.oa = "noLoungeTokenResponse";
                B8(a, 3E4)
            })
        },
        a2a = function(a) {
            g.fr(a.I);
            a.I = 0;
            g.fr(a.J);
            a.J = 0;
            a.D();
            a.D = function() {};
            g.fr(a.V)
        },
        D8 = function(a, b) {
            t8.call(this, a, b, "ManualSession");
            this.u = g.dr((0, g.Ra)(this.Ru, this, null), 150)
        },
        E8 = function(a, b) {
            g.Vu.call(this);
            this.config_ = b;
            this.u = a;
            this.N = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.V = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.j = null;
            this.J = !1;
            this.B = [];
            this.D = (0, g.Ra)(this.FZ, this)
        },
        b2a = function(a, b) {
            return b ? g.Qb(a.B, function(c) {
                return t6(b, c.label)
            }, a) : null
        },
        F8 = function(a) {
            b8("Controller", a)
        },
        t1a = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        G8 = function(a) {
            return a.J || !!a.B.length || !!a.j
        },
        H8 = function(a, b, c) {
            b != a.j && (g.of(a.j), (a.j = b) ? (c ? a.X("yt-remote-cast2-receiver-resumed",
                b.j) : a.X("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Ra)(a.YP, a, b)), b.subscribe("sessionFailed", function() {
                return c2a(a, b)
            }), b.getScreen() ? a.X("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.Ru(null)) : a.X("yt-remote-cast2-session-change", null))
        },
        c2a = function(a, b) {
            a.j == b && a.X("yt-remote-cast2-session-failed")
        },
        d2a = function(a) {
            var b = a.u.IK(),
                c = a.j && a.j.j;
            a = g.Bl(b, function(d) {
                c && t6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = b2a(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        i2a = function(a, b, c, d) {
            d.disableCastApi ? I8("Cannot initialize because disabled by Mdx config.") : e2a() ? f2a(b, d) && (J8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? g2a(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? g2a(a, c) : (K8("Failed to load cast API: " + f), L8(!1), J8(!1), g.Uv("yt-remote-cast-available"), g.Uv("yt-remote-cast-receiver"),
                    h2a(), c(!1))
            }, d.loadCastApiSetupScript ? g.Wv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= F6() && V_a() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? H6() : 89 <= F6() ? X_a() : (I6(), G6(W_a.map(S_a))))) : I8("Cannot initialize because not running Chrome")
        },
        h2a = function() {
            I8("dispose");
            var a = M8();
            a && a.dispose();
            g.Ia("yt.mdx.remote.cloudview.instance_", null);
            j2a(!1);
            g.vu(N8);
            N8.length = 0
        },
        O8 = function() {
            return !!g.Tv("yt-remote-cast-installed")
        },
        k2a = function() {
            var a = g.Tv("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        l2a = function() {
            I8("clearCurrentReceiver");
            g.Uv("yt-remote-cast-receiver")
        },
        m2a = function() {
            return O8() ? M8() ? M8().getCastSession() : (K8("getCastSelector: Cast is not initialized."), null) : (K8("getCastSelector: Cast API is not installed!"), null)
        },
        Q8 = function() {
            O8() ? M8() ? P8() ? (I8("Requesting cast selector."), M8().requestSession()) : (I8("Wait for cast API to be ready to request the session."), N8.push(g.uu("yt-remote-cast2-api-ready", Q8))) : K8("requestCastSelector: Cast is not initialized.") : K8("requestCastSelector: Cast API is not installed!")
        },
        R8 =
        function(a, b) {
            P8() ? M8().setConnectedScreenStatus(a, b) : K8("setConnectedScreenStatus called before ready.")
        },
        e2a = function() {
            var a = 0 <= g.rb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.Yz || a
        },
        n2a = function(a, b) {
            M8().init(a, b)
        },
        f2a = function(a, b) {
            var c = !1;
            M8() || (a = new E8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Sv("yt-remote-cast-available", d);
                q6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                I8("onReceiverSelected: " + d.friendlyName);
                g.Sv("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                I8("onReceiverResumed: " + d.friendlyName);
                g.Sv("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                I8("onSessionChange: " + u6(d));
                d || g.Uv("yt-remote-cast-receiver");
                q6("yt-remote-cast2-session-change", d)
            }), g.Ia("yt.mdx.remote.cloudview.instance_", a), c = !0);
            I8("cloudview.createSingleton_: " + c);
            return c
        },
        M8 = function() {
            return g.Ja("yt.mdx.remote.cloudview.instance_")
        },
        g2a = function(a, b) {
            L8(!0);
            J8(!1);
            n2a(a, function(c) {
                c ? (j2a(!0), g.wu("yt-remote-cast2-api-ready")) : (K8("Failed to initialize cast API."), L8(!1), g.Uv("yt-remote-cast-available"), g.Uv("yt-remote-cast-receiver"), h2a());
                b(c)
            })
        },
        I8 = function(a) {
            b8("cloudview", a)
        },
        K8 = function(a) {
            b8("cloudview", a)
        },
        L8 = function(a) {
            I8("setCastInstalled_ " + a);
            g.Sv("yt-remote-cast-installed", a)
        },
        P8 = function() {
            return !!g.Ja("yt.mdx.remote.cloudview.apiReady_")
        },
        j2a = function(a) {
            I8("setApiReady_ " + a);
            g.Ia("yt.mdx.remote.cloudview.apiReady_", a)
        },
        J8 = function(a) {
            g.Ia("yt.mdx.remote.cloudview.initializing_", a)
        },
        S8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.gm = !1;
            this.N = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        T8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.gm = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Ta();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.N = 0;
            a.B = NaN;
            a.u = !1
        },
        U8 = function(a) {
            return a.Lc() ? (g.Ta() - a.I) / 1E3 : 0
        },
        V8 = function(a, b) {
            a.J = b;
            a.I = g.Ta()
        },
        W8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ta() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        X8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && T8(a)
        },
        Y8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Wf(a.trackData);
            b.hasPrevious = a.gm;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.N;
            b.liveIngestionTime = a.B;
            return b
        },
        $8 = function(a, b) {
            g.Vu.call(this);
            this.B = 0;
            this.C = a;
            this.I = [];
            this.D = new n1a;
            this.u = this.j = null;
            this.V = (0, g.Ra)(this.sY, this);
            this.J = (0, g.Ra)(this.My, this);
            this.N = (0, g.Ra)(this.rY, this);
            this.W = (0, g.Ra)(this.vY, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.bJ, this), o2a(this))) : c = 3;
            0 != c && (b ? this.bJ(c) : g.dr((0, g.Ra)(function() {
                this.bJ(c)
            }, this), 0));
            (a = m2a()) && Z8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.W)
        },
        a9 = function(a) {
            return new S8(a.C.getPlayerContextData())
        },
        o2a = function(a) {
            g.mc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.I.push(this.C.subscribe(b, g.Sa(this.DZ, b), this))
            }, a)
        },
        p2a = function(a) {
            g.mc(a.I, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.I.length = 0
        },
        b9 = function(a) {
            return 1 == a.getState()
        },
        c9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.enqueue(b)
        },
        e9 = function(a, b, c) {
            var d = a9(a);
            V8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            d9(a, d)
        },
        f9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        d9 = function(a, b) {
            p2a(a);
            a.C.setPlayerContextData(Y8(b));
            o2a(a)
        },
        Z8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.V), a.u.removeMediaListener(a.J), a.My(null));
            a.u = b;
            a.u && (c8("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.V), a.u.addMediaListener(a.J), a.u.media.length && a.My(a.u.media[0]))
        },
        q2a = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = a9(a);
                b.contentId != d.videoId && c8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                V8(d, a.j.getEstimatedTime());
                d9(a, d)
            } else c8("No cast media video. Ignoring state update.")
        },
        g9 = function(a, b, c) {
            return (0, g.Ra)(function(d) {
                this.Xe("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Xe("Retrying " + b + " using MDx browser channel."), f9(this, b, c))
            }, a)
        },
        j9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.Vu.call(this);
            var e = this;
            this.I = NaN;
            this.ma = !1;
            this.V = this.N = this.Y = this.oa = NaN;
            this.W = [];
            this.D = this.J = this.C = this.j = this.u = null;
            this.Fa = a;
            this.Da = d;
            this.W.push(g.au(window, "beforeunload", function() {
                e.nu(2)
            }));
            this.B = [];
            this.j = new S8;
            this.Ia = b.id;
            this.va = b.idType;
            this.u = s1a(this.Fa, c, this.NK, "shortLived" == this.va, this.Ia);
            this.u.Ja("channelOpened", function() {
                r2a(e)
            });
            this.u.Ja("channelClosed", function() {
                h9("Channel closed");
                isNaN(e.I) ? D6(!0) : D6();
                e.dispose()
            });
            this.u.Ja("channelError", function(f) {
                D6();
                isNaN(e.Rx()) ? (1 == f && "shortLived" == e.va && e.X("browserChannelAuthError", f), h9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.ma = !0, h9("Channel error: " + f + " with reconnection in " + e.Rx() + " ms"), i9(e, 2))
            });
            this.u.Ja("channelMessage", function(f) {
                s2a(e, f)
            });
            this.u.jo(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.Vv() && g.Sv("yt-remote-session-video-id", f)
            })
        },
        t2a = function(a) {
            return g.Qb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        h9 = function(a) {
            b8("conn", a)
        },
        i9 = function(a, b) {
            a.X("proxyStateChange", b)
        },
        u2a = function(a) {
            a.I = g.dr(function() {
                h9("Connecting timeout");
                a.nu(1)
            }, 2E4)
        },
        k9 = function(a) {
            g.fr(a.I);
            a.I = NaN
        },
        l9 = function(a) {
            g.fr(a.oa);
            a.oa = NaN
        },
        v2a = function(a) {
            m9(a);
            a.Y = g.dr(function() {
                n9(a, "getNowPlaying")
            }, 2E4)
        },
        m9 = function(a) {
            g.fr(a.Y);
            a.Y = NaN
        },
        r2a = function(a) {
            h9("Channel opened");
            a.ma && (a.ma = !1, l9(a), a.oa = g.dr(function() {
                h9("Timing out waiting for a screen.");
                a.nu(1)
            }, 15E3))
        },
        x2a = function(a, b) {
            var c = null;
            if (b) {
                var d = t2a(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ia("yt.mdx.remote.remoteClient_", c);
            b && (k9(a), l9(a));
            c = a.u.Ju() && isNaN(a.I);
            b == c ? b && (i9(a, 1), n9(a, "getSubtitlesTrack")) : b ? (a.IN() && a.j.reset(), i9(a, 1), n9(a, "getNowPlaying"), w2a(a)) : a.nu(1)
        },
        y2a = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Qf(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.X("remotePlayerChange"))
        },
        z2a = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            X8(a.j, d, e);
            a.X("remoteQueueChange", c)
        },
        B2a = function(a, b) {
            b.params = b.params || {};
            z2a(a, b, "NOW_PLAYING_MAY_CHANGE");
            A2a(a, b);
            a.X("autoplayDismissed")
        },
        A2a = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            V8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.N = isNaN(c) ? 0 : c;
            a.j.Wk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? v2a(a) : m9(a);
            a.X("remotePlayerChange")
        },
        C2a = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c = 1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                V8(a.j, isNaN(b) ? 0 : b);
                a.X("remotePlayerChange")
            }
        },
        D2a = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.X("remotePlayerChange")
        },
        E2a = function(a, b) {
            a.J = b.params.videoId;
            a.X("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        F2a = function(a, b) {
            a.J = b.params.videoId || null;
            a.X("autoplayUpNext", a.J)
        },
        G2a = function(a, b) {
            a.D = b.params.autoplayMode;
            a.X("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.X("autoplayDismissed")
        },
        H2a = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.gm = "true" == b.params.hasPrevious;
            a.j.hasNext = c;
            a.X("previousNextChange")
        },
        s2a = function(a, b) {
            b = b.message;
            b.params ? h9("Received: action=" + b.action + ", params=" + g.Gi(b.params)) : h9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = p6(b.params.devices);
                    a.B = g.Bl(b, function(d) {
                        return new r6(d)
                    });
                    b = !!g.Qb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    x2a(a, b);
                    b = a.qO("mlm");
                    a.X("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.$b(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    x2a(a, !1);
                    break;
                case "remoteConnected":
                    var c = new r6(p6(b.params.device));
                    g.Qb(a.B, function(d) {
                        return d.equals(c)
                    }) || v_a(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new r6(p6(b.params.device));
                    g.$b(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    z2a(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    B2a(a, b);
                    break;
                case "onStateChange":
                    A2a(a, b);
                    break;
                case "onAdStateChange":
                    C2a(a, b);
                    break;
                case "onVolumeChanged":
                    D2a(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    y2a(a, b);
                    break;
                case "nowAutoplaying":
                    E2a(a, b);
                    break;
                case "autoplayDismissed":
                    a.X("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    F2a(a, b);
                    break;
                case "onAutoplayModeChanged":
                    G2a(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    H2a(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.X("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.X("loopModeChange", b.params.loopMode);
                    break;
                default:
                    h9("Unrecognized action: " + b.action)
            }
        },
        w2a = function(a) {
            g.fr(a.V);
            a.V = g.dr(function() {
                a.nu(1)
            }, 864E5)
        },
        n9 = function(a, b, c) {
            c ? h9("Sending: action=" + b + ", params=" + g.Gi(c)) : h9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        o9 = function(a) {
            g8.call(this, "ScreenServiceProxy");
            this.Ef = a;
            this.j = [];
            this.j.push(this.Ef.$_s("screenChange", (0, g.Ra)(this.cT, this)));
            this.j.push(this.Ef.$_s("onlineScreenChange", (0, g.Ra)(this.lZ, this)))
        },
        L2a = function(a, b) {
            N_a();
            if (!E6 || !E6.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                G_a();
                C6();
                p9 || (p9 = new V7(b ? b.loungeApiHost : void 0), O_a() && (p9.j = "/api/loungedev"));
                q9 || (q9 = g.Ja("yt.mdx.remote.deferredProxies_") || [], g.Ia("yt.mdx.remote.deferredProxies_", q9));
                I2a();
                var c = r9();
                if (!c) {
                    var d = new q8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ia("yt.mdx.remote.screenService_", d);
                    c = r9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ia("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    i2a(a, d, function(f) {
                        f ? s9() && R8(s9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            q6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ja("yt.mdx.remote.initialized_") && (g.Ia("yt.mdx.remote.initialized_", !0), t9("Initializing: " + g.Gi(b)),
                    u9.push(g.uu("yt-remote-cast2-api-ready", function() {
                        q6("yt-remote-api-ready")
                    })), u9.push(g.uu("yt-remote-cast2-availability-change", function() {
                        q6("yt-remote-receiver-availability-change")
                    })), u9.push(g.uu("yt-remote-cast2-receiver-selected", function() {
                        v9(null);
                        q6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), u9.push(g.uu("yt-remote-cast2-receiver-resumed", function() {
                        q6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), u9.push(g.uu("yt-remote-cast2-session-change", J2a)), u9.push(g.uu("yt-remote-connection-change", function(f) {
                        f ? R8(s9(), "YouTube TV") : w9() || (R8(null, null), l2a())
                    })), u9.push(g.uu("yt-remote-cast2-session-failed", function() {
                        q6("yt-remote-connection-failed")
                    })), a = x9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Q("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), t9(" -- with channel params: " + g.Gi(a)), a ? (g.Sv("yt-remote-session-app", a.app), g.Sv("yt-remote-session-name", a.name)) : (g.Uv("yt-remote-session-app"), g.Uv("yt-remote-session-name")), g.Ia("yt.mdx.remote.channelParams_", a), c.start(), s9() || K2a())
            }
        },
        M2a = function() {
            var a = r9().Ef.$_gos();
            var b = y9();
            b && z9() && (x6(a, b) || a.push(b));
            return F_a(a)
        },
        A9 = function() {
            var a = N2a();
            !a && O8() && k2a() && (a = {
                key: "cast-selector-receiver",
                name: k2a()
            });
            return a
        },
        N2a = function() {
            var a = M2a(),
                b = y9();
            b || (b = w9());
            return g.Qb(a, function(c) {
                return b && t6(b, c.key) ? !0 : !1
            })
        },
        y9 = function() {
            var a = s9();
            if (!a) return null;
            var b = r9().Pi();
            return y6(b, a)
        },
        J2a = function(a) {
            t9("remote.onCastSessionChange_: " + u6(a));
            if (a) {
                var b = y9();
                if (b && b.id == a.id) {
                    if (R8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) B9 && (B9.token = a), (b = z9()) && b.jo(a)
                } else b && C9(), D9(a, 1)
            } else z9() && C9()
        },
        C9 = function() {
            P8() ? M8().stopSession() : K8("stopSession called before API ready.");
            var a = z9();
            a && (a.disconnect(1), E9(null))
        },
        F9 = function() {
            var a = z9();
            return !!a && 3 != a.getProxyState()
        },
        t9 = function(a) {
            b8("remote", a)
        },
        r9 = function() {
            if (!G9) {
                var a = g.Ja("yt.mdx.remote.screenService_");
                G9 = a ? new o9(a) : null
            }
            return G9
        },
        s9 = function() {
            return g.Ja("yt.mdx.remote.currentScreenId_")
        },
        O2a = function(a) {
            g.Ia("yt.mdx.remote.currentScreenId_", a)
        },
        P2a = function() {
            return g.Ja("yt.mdx.remote.connectData_")
        },
        v9 = function(a) {
            g.Ia("yt.mdx.remote.connectData_", a)
        },
        z9 = function() {
            return g.Ja("yt.mdx.remote.connection_")
        },
        E9 = function(a) {
            var b = z9();
            v9(null);
            a || O2a("");
            g.Ia("yt.mdx.remote.connection_", a);
            q9 && (g.mc(q9, function(c) {
                c(a)
            }), q9.length = 0);
            b && !a ? q6("yt-remote-connection-change", !1) : !b && a && q6("yt-remote-connection-change", !0)
        },
        w9 = function() {
            var a = g.Vv();
            if (!a) return null;
            var b = r9();
            if (!b) return null;
            b = b.Pi();
            return y6(b, a)
        },
        D9 = function(a, b) {
            s9();
            y9() && y9();
            if (H9) B9 = a;
            else {
                O2a(a.id);
                var c = g.Ja("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new j9(p9, a, x9(), c);
                a.connect(b, P2a());
                a.subscribe("beforeDisconnect", function(d) {
                    q6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    z9() && (z9(), E9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = y9();
                    d && "shortLived" == d.idType && (P8() ? M8().handleBrowserChannelAuthError() : K8("refreshLoungeToken called before API ready."))
                });
                E9(a)
            }
        },
        K2a = function() {
            var a = w9();
            a ? (t9("Resume connection to: " + u6(a)), D9(a, 0)) : (D6(), l2a(), t9("Skipping connecting because no session screen found."))
        },
        I2a = function() {
            var a = x9();
            if (g.Qf(a)) {
                a = B6();
                var b = g.Tv("yt-remote-session-name") || "",
                    c = g.Tv("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ia("yt.mdx.remote.channelParams_", a)
            }
        },
        x9 = function() {
            return g.Ja("yt.mdx.remote.channelParams_") || {}
        },
        I9 = function(a, b, c) {
            g.G.call(this);
            var d = this;
            this.u = a;
            this.G = b;
            this.Zb = c;
            this.events = new g.Uz(this);
            this.W = this.events.P(this.G, "onVolumeChange", function(e) {
                Q2a(d, e)
            });
            this.D = !1;
            this.I = new g.KF(64);
            this.j = new g.L(this.hR, 500, this);
            this.B = new g.L(this.iR, 1E3, this);
            this.N = new K6(this.m1, 0, this);
            this.C = {};
            this.V = new g.L(this.QR, 1E3, this);
            this.J = new L6(this.seekTo, 1E3, this);
            g.H(this, this.events);
            this.events.P(b, "onCaptionsTrackListChanged", this.WY);
            this.events.P(b, "captionschanged", this.pY);
            this.events.P(b, "captionssettingschanged", this.pR);
            this.events.P(b, "videoplayerreset", this.zC);
            this.events.P(b, "mdxautoplaycancel", function() {
                d.Zb.dN()
            });
            a = this.Zb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.VP, this);
            a.subscribe("remotePlayerChange", this.Ry, this);
            a.subscribe("remoteQueueChange", this.zC, this);
            a.subscribe("previousNextChange", this.SP, this);
            a.subscribe("nowAutoplaying", this.MP, this);
            a.subscribe("autoplayDismissed", this.qP, this);
            g.H(this, this.j);
            g.H(this, this.B);
            g.H(this, this.N);
            g.H(this, this.V);
            g.H(this, this.J);
            this.pR();
            this.zC();
            this.Ry()
        },
        Q2a = function(a, b) {
            if (J9(a)) {
                a.Zb.unsubscribe("remotePlayerChange", a.Ry, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = a9(a.Zb);
                if (c !== d.volume || b !== d.muted) a.Zb.setVolume(c, b), a.V.start();
                a.Zb.subscribe("remotePlayerChange", a.Ry, a)
            }
        },
        R2a = function(a) {
            a.Qb(0);
            a.j.stop();
            a.Tb(new g.KF(64))
        },
        K9 = function(a, b) {
            if (J9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.Yf(c, b));
                a.Zb.MK(a.G.getVideoData(1).videoId, c);
                a.C = a9(a.Zb).trackData
            }
        },
        L9 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Zb.playVideo(c.videoId, b, d, e, c.playerParams, c.ma, u_a(c));
            a.Tb(new g.KF(1))
        },
        S2a = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    iO: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.D = !1) : (a.G.loadModule("captions"), a.D = !0)
            } else a.G.setOption("captions", "track", {})
        },
        J9 = function(a) {
            return a9(a.Zb).videoId === a.G.getVideoData(1).videoId
        },
        M9 = function() {
            g.W.call(this, {
                F: "div",
                K: "ytp-mdx-popup-dialog",
                T: {
                    role: "dialog"
                },
                R: [{
                    F: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    R: [{
                            F: "div",
                            K: "ytp-mdx-popup-title",
                            Z: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t"
                        }, {
                            F: "div",
                            K: "ytp-mdx-popup-description",
                            Z: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o nh\u1eadt k\u00fd xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh."
                        },
                        {
                            F: "div",
                            K: "ytp-mdx-privacy-popup-buttons",
                            R: [{
                                F: "button",
                                Ba: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                Z: "H\u1ee7y"
                            }, {
                                F: "button",
                                Ba: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                Z: "X\u00e1c nh\u1eadn"
                            }]
                        }
                    ]
                }]
            });
            this.j = new g.sH(this, 250);
            this.cancelButton = this.ya("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.ya("ytp-mdx-privacy-popup-confirm");
            g.H(this, this.j);
            this.P(this.cancelButton, "click", this.u);
            this.P(this.confirmButton, "click", this.B)
        },
        N9 = function(a) {
            g.W.call(this, {
                F: "div",
                K: "ytp-remote",
                R: [{
                    F: "div",
                    K: "ytp-remote-display-status",
                    R: [{
                        F: "div",
                        K: "ytp-remote-display-status-icon",
                        R: [g.wza()]
                    }, {
                        F: "div",
                        K: "ytp-remote-display-status-text",
                        Z: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.sH(this, 250);
            g.H(this, this.j);
            this.P(a, "presentingplayerstatechange", this.onStateChange);
            T2a(this, a.vb())
        },
        T2a = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.rF("L\u1ed7i tr\u00ean $RECEIVER_NAME", c) : b.Lc() || g.V(b, 4) ? g.rF("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", c) : g.rF("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", c);
                a.Ha("statustext", b);
                a.j.show()
            } else a.j.hide()
        },
        O9 = function(a, b) {
            g.WM.call(this, "Ph\u00e1t tr\u00ean", 0, a, b);
            this.G = a;
            this.bq = {};
            this.P(a, "onMdxReceiversChange", this.D);
            this.P(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        P9 = function(a) {
            g.CJ.call(this, a);
            this.qm = {
                key: w6(),
                name: "M\u00e1y t\u00ednh n\u00e0y"
            };
            this.pj = null;
            this.subscriptions = [];
            this.sI = this.Zb = null;
            this.bq = [this.qm];
            this.Uo = this.qm;
            this.Vd = new g.KF(64);
            this.DO = 0;
            this.gg = -1;
            this.Zy = !1;
            this.Xy = this.vv = null;
            if (!g.fC(this.player.S()) && !g.gC(this.player.S())) {
                a = this.player;
                var b = g.eJ(a);
                b && (b = b.xp()) && (b = new O9(a, b), g.H(this, b));
                b = new N9(a);
                g.H(this, b);
                g.oJ(a, b.element, 4);
                this.vv = new M9;
                g.H(this, this.vv);
                g.oJ(a, this.vv.element, 4);
                this.Zy = !!w9()
            }
        },
        Q9 = function(a) {
            a.Xy && (a.player.removeEventListener("presentingplayerstatechange",
                a.Xy), a.Xy = null)
        },
        U2a = function(a, b, c) {
            a.Vd = c;
            a.player.X("presentingplayerstatechange", new g.dF(c, b))
        },
        R9 = function(a, b) {
            if (b.key !== a.Uo.key)
                if (b.key === a.qm.key) C9();
                else {
                    var c;
                    (c = !a.player.S().L("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.Zy || !a.vv);
                    (c ? 0 : g.xC(a.player.S()) || g.AC(a.player.S())) && V2a(a);
                    a.Uo = b;
                    if (!a.player.S().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.gC(a.player.S())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.S().L("should_clear_video_data_on_player_cued_unstarted")) a =
                            null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var k = [];
                                for (var l = 0; l < f.length; l++) k[l] = g.xJ(f, l).videoId
                            } else k = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: k,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.ma,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = u_a(c)) && (a.locationInfo = c)
                        }
                        t9("Connecting to: " + g.Gi(b));
                        "cast-selector-receiver" == b.key ? (v9(a || null), b = a || null, P8() ? M8().setLaunchParams(b) : K8("setLaunchParams called before ready.")) : !a && F9() &&
                            s9() == b.key ? q6("yt-remote-connection-change", !0) : (C9(), v9(a || null), a = r9().Pi(), (b = y6(a, b.key)) && D9(b, 1))
                    }
                }
        },
        V2a = function(a) {
            a.player.vb().Lc() ? a.player.pauseVideo() : (a.Xy = function(b) {
                !a.Zy && g.fF(b, 8) && (a.player.pauseVideo(), Q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.Xy));
            a.vv && a.vv.wd();
            z9() || (H9 = !0)
        };
    g.jq.prototype.kp = g.ca(1, function() {
        return g.$d(this, 6)
    });
    g.Zc.prototype.hA = g.ca(0, function() {
        var a = g.cd(this);
        return 4294967296 * g.cd(this) + (a >>> 0)
    });
    var f_a, W2a = g.Xe(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.D(b, c, g.dd(a.j));
            return !0
        }, g.Ye),
        X2a = g.Xe(function(a, b, c, d) {
            if (1 !== a.u) return !1;
            g.oe(b, c, d, g.dd(a.j));
            return !0
        }, g.Ye),
        Y2a = g.Xe(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.ad(a.j));
            return !0
        }, g.Ze),
        Z2a = g.Xe(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.oe(b, c, d, g.ad(a.j));
            return !0
        }, g.Ze),
        $2a = g.Xe(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.bd(a.j));
            return !0
        }, g.$e),
        a3a = g.Xe(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.oe(b, c, d, g.bd(a.j));
            return !0
        }, g.$e),
        b3a = g.Xe(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.D(b, c, a.j.hA());
            return !0
        }, function(a, b, c) {
            h_a(a, c, g.$d(b, c))
        }),
        c3a = g.Xe(function(a, b, c) {
            if (1 !== a.u && 2 !== a.u) return !1;
            b = g.be(b, c);
            if (2 == a.u) {
                c = g.Zc.prototype.hA;
                var d = g.bd(a.j) >>> 0;
                for (d = a.j.j + d; a.j.j < d;) b.push(c.call(a.j))
            } else b.push(a.j.hA());
            return !0
        }, function(a, b, c) {
            b = g.be(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) h_a(a, c, b[d])
        }),
        d3a = g.Xe(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.ed(a.j));
            return !0
        }, i_a),
        e3a = g.Xe(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.oe(b, c, d, g.ed(a.j));
            return !0
        }, i_a),
        f3a = g.Xe(function(a, b, c) {
            if (2 !== a.u) return !1;
            a = g.rd(a);
            g.ie(b, c, a);
            return !0
        }, function(a, b, c) {
            b = g.be(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && g.Fd(a, c, g.eb(e))
                }
        }),
        g3a = g.Xe(function(a, b, c, d) {
            if (2 !== a.u) return !1;
            g.oe(b, c, d, g.rd(a));
            return !0
        }, g.af),
        h3a = g.Xe(function(a, b, c, d, e) {
            if (2 !== a.u) return !1;
            g.od(a, g.pe(b, d, c), e);
            return !0
        }, g.bf),
        k_a = [1];
    g.w(l_a, g.F);
    g.w(m_a, g.F);
    var i3a = [l_a, 1, g.g_, [m_a, 1, W2a, 2, Y2a]];
    g.w(n_a, g.F);
    g.w(o_a, g.F);
    g.w(p_a, g.F);
    var j3a = [1, 2],
        k3a = [g.si, 1, g.f_, 5, b3a, 2, h3a, [n_a, 1, g.h_, [o_a, 1, g.f_, 2, g.f_, 3, d3a], j3a, 2, g.h_, [p_a, 1, g.f_, 2, g.f_, 3, $2a, 4, d3a], j3a], 3, f3a, 6, c3a, 4, g.g_, [g.ti, 1, g.g_, [g.ui, 1, g3a, g.xi, 2, a3a, g.xi, 3, e3a, g.xi], 2, h3a, [g.vi, 1, Z2a, g.wi, 2, X2a, g.wi, 3, g.h_, i3a, g.wi]]],
        T0a = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        B7 = {
            "'": "\\'"
        },
        B_a = {
            W2: "atp",
            Wfa: "ska",
            vea: "que",
            Uba: "mus",
            Vfa: "sus",
            u8: "dsp",
            Xea: "seq",
            xba: "mic",
            k7: "dpa",
            r3: "cds",
            Sba: "mlm",
            h7: "dsdtr",
            Oca: "ntb"
        };
    r6.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var E6, A6 = "",
        U_a = P_a("loadCastFramework") || P_a("loadCastApplicationFramework"),
        W_a = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ua(K6, g.G);
    g.h = K6.prototype;
    g.h.yU = function(a) {
        this.C = arguments;
        this.j = !1;
        this.pc ? this.B = g.Ta() + this.Ug : this.pc = g.pi(this.D, this.Ug)
    };
    g.h.stop = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.h.pause = function() {
        ++this.u
    };
    g.h.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C)))
    };
    g.h.ea = function() {
        this.stop();
        K6.He.ea.call(this)
    };
    g.h.zU = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null);
        this.B ? (this.pc = g.pi(this.D, this.B - g.Ta()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C))
    };
    g.w(L6, g.G);
    g.h = L6.prototype;
    g.h.CE = function(a) {
        this.B = arguments;
        this.pc || this.u ? this.j = !0 : M6(this)
    };
    g.h.stop = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null, this.j = !1, this.B = null)
    };
    g.h.pause = function() {
        this.u++
    };
    g.h.resume = function() {
        this.u--;
        this.u || !this.j || this.pc || (this.j = !1, M6(this))
    };
    g.h.ea = function() {
        g.G.prototype.ea.call(this);
        this.stop()
    };
    N6.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    N6.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    g.Ua(O6, g.rf);
    g.Ua(P6, g.rf);
    var c0a = !1;
    var e0a = null;
    g.Ua(f0a, g.rf);
    g.Ua(g0a, g.rf);
    g.Ua(h0a, g.rf);
    U6.prototype.info = function() {};
    U6.prototype.warning = function() {};
    var Z6 = {},
        Y6 = {};
    g.h = V6.prototype;
    g.h.setTimeout = function(a) {
        this.ib = a
    };
    g.h.DS = function(a) {
        a = a.target;
        var b = this.Ra;
        b && 3 == g.kj(a) ? b.CE() : this.qK(a)
    };
    g.h.qK = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.kj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.EC || this.j && (this.u.u || g.mj(this.j) || g.nj(this.j)))) {
                    this.Da || 4 != b || 7 == c || (8 == c || 0 >= d ? R6(3) : R6(2));
                    c7(this);
                    var e = this.j.getStatus();
                    this.Gb = e;
                    b: if (l0a(this)) {
                        var f = g.nj(this.j);
                        a = "";
                        var k = f.length,
                            l = 4 == g.kj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                a7(this);
                                b7(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.C.TextDecoder
                        }
                        for (c = 0; c < k; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == k - 1
                        });
                        f.splice(0, k);
                        this.u.j += a;
                        this.W = 0;
                        m = this.u.j
                    } else m = g.mj(this.j);
                    if (this.B = 200 == e) {
                        if (this.Sb && !this.Qa) {
                            b: {
                                if (this.j) {
                                    var n = g.oj(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.jb(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Qa = !0,
                            $6(this, e);
                            else {
                                this.B = !1;
                                this.I = 3;
                                S6(12);
                                a7(this);
                                b7(this);
                                break a
                            }
                        }
                        this.va ? (n0a(this, b, m), g.EC && this.B && 3 == b && (this.Za.Ja(this.eb, "tick", this.CS), this.eb.start())) : $6(this, m);
                        4 == b && a7(this);
                        this.B && !this.Da && (4 == b ? p0a(this.D, this) : (this.B = !1, X6(this)))
                    } else 400 == e && 0 <
                        m.indexOf("Unknown SID") ? (this.I = 3, S6(12)) : (this.I = 0, S6(13)), a7(this), b7(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.h.CS = function() {
        if (this.j) {
            var a = g.kj(this.j),
                b = g.mj(this.j);
            this.W < b.length && (c7(this), n0a(this, a, b), this.B && 4 != a && X6(this))
        }
    };
    g.h.cancel = function() {
        this.Da = !0;
        a7(this)
    };
    g.h.BS = function() {
        this.V = null;
        var a = Date.now();
        0 <= a - this.Fb ? (2 != this.Ia && (R6(3), S6(17)), a7(this), this.I = 2, b7(this)) : o0a(this, this.Fb - a)
    };
    g.h.getLastError = function() {
        return this.I
    };
    u0a.prototype.cancel = function() {
        this.B = l7(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.r(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.h = z0a.prototype;
    g.h.rK = 8;
    g.h.Wf = 1;
    g.h.connect = function(a, b, c, d) {
        this.lf && g.fi((0, g.Ra)(this.o0, this, a));
        S6(0);
        this.Bc = a;
        this.Da = b || {};
        c && void 0 !== d && (this.Da.OSID = c, this.Da.OAID = d);
        this.eb = this.Kc;
        this.Fa = q0a(this, null, this.Bc);
        k7(this)
    };
    g.h.disconnect = function() {
        A0a(this);
        if (3 == this.Wf) {
            var a = this.Ra++,
                b = this.Fa.clone();
            g.nk(b, "SID", this.C);
            g.nk(b, "RID", a);
            g.nk(b, "TYPE", "terminate");
            p7(this, b);
            a = new V6(this, this.C, a);
            a.Ia = 2;
            a.J = m6(b.clone());
            b = !1;
            g.C.navigator && g.C.navigator.sendBeacon && (b = g.C.navigator.sendBeacon(a.J.toString(), ""));
            !b && g.C.Image && ((new Image).src = a.J, b = !0);
            b || (a.j = k0a(a.D, null), a.j.send(a.J));
            a.oa = Date.now();
            X6(a)
        }
        G0a(this)
    };
    g.h.o0 = function(a) {
        try {
            d0a(a, function() {})
        } catch (b) {}
    };
    g.h.Gf = function() {
        return 0 == this.Wf
    };
    g.h.getState = function() {
        return this.Wf
    };
    g.h.tK = function(a) {
        if (this.I)
            if (this.I = null, 1 == this.Wf) {
                if (!a) {
                    this.Ra = Math.floor(1E5 * Math.random());
                    a = this.Ra++;
                    var b = new V6(this, "", a),
                        c = this.V;
                    this.Fb && (c ? (c = g.Vf(c), g.Yf(c, this.Fb)) : c = this.Fb);
                    null !== this.J || this.gb || (b.Fa = c, c = null);
                    var d;
                    if (this.ib) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = D0a(this, b, d);
                    e = this.Fa.clone();
                    g.nk(e, "RID", a);
                    g.nk(e, "CVER", 22);
                    this.va && g.nk(e, "X-HTTP-Session-Id", this.va);
                    p7(this, e);
                    c && (this.gb ? d = "headers=" + g.xh(g.Vda(c)) + "&" + d : this.J && g.rk(e, this.J, c));
                    j7(this.u, b);
                    this.kf && g.nk(e, "TYPE", "init");
                    this.ib ? (g.nk(e, "$req", d), g.nk(e, "SID", "null"), b.Sb = !0, W6(b, e, null)) : W6(b, e, d);
                    this.Wf = 2
                }
            } else 3 == this.Wf && (a ? E0a(this, a) : 0 == this.B.length || v0a(this.u) || E0a(this))
    };
    g.h.sK = function() {
        this.N = null;
        F0a(this);
        if (this.Rc && !(this.Za || null == this.j || 0 >= this.bd)) {
            var a = 2 * this.bd;
            this.ma = T6((0, g.Ra)(this.oY, this), a)
        }
    };
    g.h.oY = function() {
        this.ma && (this.ma = null, this.eb = !1, this.Za = !0, S6(10), f7(this), F0a(this))
    };
    g.h.TH = function(a) {
        this.j == a && this.Rc && !this.Za && (o7(this), this.Za = !0, S6(11))
    };
    g.h.ES = function() {
        null != this.W && (this.W = null, f7(this), g7(this), S6(19))
    };
    g.h.P0 = function(a) {
        a ? S6(2) : S6(1)
    };
    g.h.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.h = I0a.prototype;
    g.h.xK = function() {};
    g.h.wK = function() {};
    g.h.vK = function() {};
    g.h.uK = function() {};
    g.h.isActive = function() {
        return !0
    };
    g.h.GS = function() {};
    g.Ua(r7, g.qg);
    r7.prototype.open = function() {
        this.j.D = this.C;
        this.J && (this.j.Ia = !0);
        this.j.connect(this.I, this.u || void 0)
    };
    r7.prototype.close = function() {
        this.j.disconnect()
    };
    r7.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Gi(a), a = c);
        b.B.push(new t0a(b.Me++, a));
        3 == b.Wf && k7(b)
    };
    r7.prototype.ea = function() {
        this.j.D = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        r7.He.ea.call(this)
    };
    g.Ua(K0a, O6);
    g.Ua(L0a, P6);
    g.Ua(q7, I0a);
    q7.prototype.xK = function() {
        this.j.dispatchEvent("m")
    };
    q7.prototype.wK = function(a) {
        this.j.dispatchEvent(new K0a(a))
    };
    q7.prototype.vK = function(a) {
        this.j.dispatchEvent(new L0a(a))
    };
    q7.prototype.uK = function() {
        this.j.dispatchEvent("n")
    };
    var t7 = new g.qg;
    g.w(O0a, g.rf);
    g.h = v7.prototype;
    g.h.yq = null;
    g.h.Jm = !1;
    g.h.Ct = null;
    g.h.bE = null;
    g.h.At = null;
    g.h.Bt = null;
    g.h.Co = null;
    g.h.Eo = null;
    g.h.zq = null;
    g.h.gh = null;
    g.h.cA = 0;
    g.h.dl = null;
    g.h.bA = null;
    g.h.Do = null;
    g.h.nw = -1;
    g.h.VQ = !0;
    g.h.xq = !1;
    g.h.aE = 0;
    g.h.aA = null;
    var R0a = {},
        y7 = {};
    g.h = v7.prototype;
    g.h.setTimeout = function(a) {
        this.u = a
    };
    g.h.IS = function(a) {
        a = a.target;
        var b = this.aA;
        b && 3 == g.kj(a) ? b.CE() : this.yK(a)
    };
    g.h.yK = function(a) {
        try {
            if (a == this.gh) a: {
                var b = g.kj(this.gh),
                    c = this.gh.u,
                    d = this.gh.getStatus();
                if (g.Fc && !g.uc(10) || g.vf && !g.tc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.mj(this.gh)) break a;this.xq || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Lk(3) : this.j.Lk(2));C7(this);
                var e = this.gh.getStatus();this.nw = e;
                var f = g.mj(this.gh);
                if (this.Jm = 200 == e) {
                    4 == b && z7(this);
                    if (this.va) {
                        for (a = !0; !this.xq && this.cA < f.length;) {
                            var k = S0a(this, f);
                            if (k == y7) {
                                4 == b && (this.Do = 4, u7(15), a = !1);
                                break
                            } else if (k == R0a) {
                                this.Do = 4;
                                u7(16);
                                a = !1;
                                break
                            } else D7(this, k)
                        }
                        4 == b && 0 == f.length && (this.Do = 1, u7(17), a = !1);
                        this.Jm = this.Jm && a;
                        a || (z7(this), A7(this))
                    } else D7(this, f);
                    this.Jm && !this.xq && (4 == b ? this.j.dA(this) : (this.Jm = !1, x7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Do = 3, u7(13)) : (this.Do = 0, u7(14)),
                z7(this),
                A7(this)
            }
        } catch (l) {} finally {}
    };
    g.h.z_ = function(a) {
        s7((0, g.Ra)(this.y_, this, a), 0)
    };
    g.h.y_ = function(a) {
        this.xq || (C7(this), D7(this, a), x7(this))
    };
    g.h.aQ = function(a) {
        s7((0, g.Ra)(this.x_, this, a), 0)
    };
    g.h.x_ = function(a) {
        this.xq || (z7(this), this.Jm = a, this.j.dA(this), this.j.Lk(4))
    };
    g.h.cancel = function() {
        this.xq = !0;
        z7(this)
    };
    g.h.HS = function() {
        this.Ct = null;
        var a = Date.now();
        0 <= a - this.bE ? (2 != this.Bt && this.j.Lk(3), z7(this), this.Do = 2, u7(18), A7(this)) : V0a(this, this.bE - a)
    };
    g.h.getLastError = function() {
        return this.Do
    };
    g.h = Y0a.prototype;
    g.h.dE = null;
    g.h.Ih = null;
    g.h.TC = !1;
    g.h.jR = null;
    g.h.dB = null;
    g.h.mH = null;
    g.h.eE = null;
    g.h.jj = null;
    g.h.Km = -1;
    g.h.ow = null;
    g.h.bx = null;
    g.h.connect = function(a) {
        this.eE = a;
        a = F7(this.j, null, this.eE);
        u7(3);
        this.jR = Date.now();
        var b = this.j.N;
        null != b ? (this.ow = b[0], (this.bx = b[1]) ? (this.jj = 1, Z0a(this)) : (this.jj = 2, H7(this))) : (n6(a, "MODE", "init"), this.Ih = new v7(this), this.Ih.yq = this.dE, w7(this.Ih, a, !1, null, !0), this.jj = 0)
    };
    g.h.tV = function(a) {
        if (a) this.jj = 2, H7(this);
        else {
            u7(4);
            var b = this.j;
            b.Cl = b.Ro.Km;
            O7(b, 9)
        }
        a && this.Lk(2)
    };
    g.h.cE = function(a) {
        return this.j.cE(a)
    };
    g.h.abort = function() {
        this.Ih && (this.Ih.cancel(), this.Ih = null);
        this.Km = -1
    };
    g.h.Gf = function() {
        return !1
    };
    g.h.zK = function(a, b) {
        this.Km = a.nw;
        if (0 == this.jj)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Cl = this.Km;
                    O7(a, 2);
                    return
                }
                this.ow = c[0];
                this.bx = c[1]
            } else a = this.j, a.Cl = this.Km, O7(a, 2);
        else if (2 == this.jj)
            if (this.TC) u7(7), this.mH = Date.now();
            else if ("11111" == b) {
            if (u7(6), this.TC = !0, this.dB = Date.now(), a = this.dB - this.jR, !g.Fc || g.uc(10) || 500 > a) this.Km = 200, this.Ih.cancel(), u7(12), G7(this.j, this, !0)
        } else u7(8), this.dB = this.mH = Date.now(), this.TC = !1
    };
    g.h.dA = function() {
        this.Km = this.Ih.nw;
        if (this.Ih.Jm) 0 == this.jj ? this.bx ? (this.jj = 1, Z0a(this)) : (this.jj = 2, H7(this)) : 2 == this.jj && ((!g.Fc || g.uc(10) ? !this.TC : 200 > this.mH - this.dB) ? (u7(11), G7(this.j, this, !1)) : (u7(12), G7(this.j, this, !0)));
        else {
            0 == this.jj ? u7(9) : 2 == this.jj && u7(10);
            var a = this.j;
            this.Ih.getLastError();
            a.Cl = this.Km;
            O7(a, 2)
        }
    };
    g.h.pw = function() {
        return this.j.pw()
    };
    g.h.isActive = function() {
        return this.j.isActive()
    };
    g.h.Lk = function(a) {
        this.j.Lk(a)
    };
    g.h = I7.prototype;
    g.h.Bl = null;
    g.h.qw = null;
    g.h.Wh = null;
    g.h.uf = null;
    g.h.fE = null;
    g.h.eA = null;
    g.h.AK = null;
    g.h.fA = null;
    g.h.uw = 0;
    g.h.KS = 0;
    g.h.Ng = null;
    g.h.Fo = null;
    g.h.Lm = null;
    g.h.Bq = null;
    g.h.Ro = null;
    g.h.AD = null;
    g.h.Ft = -1;
    g.h.BK = -1;
    g.h.Cl = -1;
    g.h.Et = 0;
    g.h.Dt = 0;
    g.h.Aq = 8;
    g.Ua(a1a, g.rf);
    g.Ua(b1a, g.rf);
    g.h = I7.prototype;
    g.h.connect = function(a, b, c, d, e) {
        u7(0);
        this.fE = b;
        this.qw = c || {};
        d && void 0 !== e && (this.qw.OSID = d, this.qw.OAID = e);
        this.J ? (s7((0, g.Ra)(this.QM, this, a), 100), c1a(this)) : this.QM(a)
    };
    g.h.disconnect = function() {
        d1a(this);
        if (3 == this.j) {
            var a = this.uw++,
                b = this.eA.clone();
            g.nk(b, "SID", this.C);
            g.nk(b, "RID", a);
            g.nk(b, "TYPE", "terminate");
            M7(this, b);
            a = new v7(this, this.C, a);
            a.Bt = 2;
            a.Co = m6(b.clone());
            j_a(new Image, a.Co.toString());
            a.At = Date.now();
            x7(a)
        }
        l1a(this)
    };
    g.h.QM = function(a) {
        this.Ro = new Y0a(this);
        this.Ro.dE = this.Bl;
        this.Ro.u = this.D;
        this.Ro.connect(a)
    };
    g.h.Gf = function() {
        return 0 == this.j
    };
    g.h.getState = function() {
        return this.j
    };
    g.h.DK = function(a) {
        this.Fo = null;
        h1a(this, a)
    };
    g.h.CK = function() {
        this.Lm = null;
        this.uf = new v7(this, this.C, "rpc", this.I);
        this.uf.yq = this.Bl;
        this.uf.aE = 0;
        var a = this.AK.clone();
        g.nk(a, "RID", "rpc");
        g.nk(a, "SID", this.C);
        g.nk(a, "CI", this.AD ? "0" : "1");
        g.nk(a, "AID", this.Ft);
        M7(this, a);
        if (!g.Fc || g.uc(10)) g.nk(a, "TYPE", "xmlhttp"), w7(this.uf, a, !0, this.fA, !1);
        else {
            g.nk(a, "TYPE", "html");
            var b = this.uf,
                c = !!this.fA;
            b.Bt = 3;
            b.Co = m6(a.clone());
            U0a(b, c)
        }
    };
    g.h.zK = function(a, b) {
        if (0 != this.j && (this.uf == a || this.Wh == a))
            if (this.Cl = a.nw, this.Wh == a && 3 == this.j)
                if (7 < this.Aq) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Lm) {
                                if (this.uf)
                                    if (this.uf.At + 3E3 < this.Wh.At) K7(this), this.uf.cancel(), this.uf = null;
                                    else break a;
                                N7(this);
                                u7(19)
                            }
                        }
                    else this.BK = a[1], 0 < this.BK - this.Ft && 37500 > a[2] && this.AD && 0 == this.Dt && !this.Bq && (this.Bq = s7((0, g.Ra)(this.LS, this), 6E3));
                    else O7(this, 11)
                } else null != b && O7(this, 11);
        else if (this.uf ==
            a && K7(this), !g.jb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ft = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.fA = c[2], c = c[3], null != c ? this.Aq = c : this.Aq = 6, this.j = 3, this.Ng && this.Ng.GK(), this.AK = F7(this, this.pw() ? this.fA : null, this.fE), i1a(this)) : "stop" == c[0] && O7(this, 7) : 3 == this.j && ("stop" == c[0] ? O7(this, 7) : "noop" != c[0] && this.Ng && this.Ng.FK(c), this.Dt = 0)
    };
    g.h.LS = function() {
        null != this.Bq && (this.Bq = null, this.uf.cancel(), this.uf = null, N7(this), u7(20))
    };
    g.h.dA = function(a) {
        if (this.uf == a) {
            K7(this);
            this.uf = null;
            var b = 2
        } else if (this.Wh == a) this.Wh = null, b = 1;
        else return;
        this.Cl = a.nw;
        if (0 != this.j)
            if (a.Jm)
                if (1 == b) {
                    b = Date.now() - a.At;
                    var c = t7;
                    c.dispatchEvent(new a1a(c, a.zq ? a.zq.length : 0, b, this.Et));
                    J7(this);
                    this.B.length = 0
                } else i1a(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Cl)) {
                if (d = 1 == b) this.Wh || this.Fo || 1 == this.j || 2 <= this.Et ? d = !1 : (this.Fo = s7((0, g.Ra)(this.DK, this, a), j1a(this, this.Et)), this.Et++, d = !0);
                d = !(d || 2 == b && N7(this))
            }
            if (d) switch (c) {
                case 1:
                    O7(this,
                        5);
                    break;
                case 4:
                    O7(this, 10);
                    break;
                case 3:
                    O7(this, 6);
                    break;
                case 7:
                    O7(this, 12);
                    break;
                default:
                    O7(this, 2)
            }
        }
    };
    g.h.JS = function(a) {
        if (!g.Ub(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.h.O0 = function(a) {
        a ? u7(2) : (u7(1), k1a(this, 8))
    };
    g.h.cE = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Xi;
        a.J = !1;
        return a
    };
    g.h.isActive = function() {
        return !!this.Ng && this.Ng.isActive(this)
    };
    g.h.Lk = function(a) {
        var b = t7;
        b.dispatchEvent(new b1a(b, a))
    };
    g.h.pw = function() {
        return !(!g.Fc || g.uc(10))
    };
    g.h = m1a.prototype;
    g.h.GK = function() {};
    g.h.FK = function() {};
    g.h.EK = function() {};
    g.h.gE = function() {};
    g.h.HK = function() {
        return {}
    };
    g.h.isActive = function() {
        return !0
    };
    g.h = n1a.prototype;
    g.h.enqueue = function(a) {
        this.u.push(a)
    };
    g.h.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.h.clear = function() {
        this.j = [];
        this.u = []
    };
    g.h.contains = function(a) {
        return g.Ub(this.j, a) || g.Ub(this.u, a)
    };
    g.h.remove = function(a) {
        var b = this.j;
        var c = (0, g.ARa)(b, a);
        0 <= c ? (g.Yb(b, c), b = !0) : b = !1;
        return b || g.Zb(this.u, a)
    };
    g.h.xj = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    o1a.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Q("enable_client_streamz_web")) {
            a = g.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.lca(c.value), c = {
                serializedIncrementBatch: g.xc(g.We(c, k3a))
            }, g.os("streamzIncremented", c, {
                VI: b
            })
        }
    };
    var P7;
    g.w(Q7, g.rf);
    g.w(R7, g.rf);
    g.Ua(S7, g.G);
    g.h = S7.prototype;
    g.h.r_ = function() {
        this.Ug = Math.min(3E5, 2 * this.Ug);
        this.B();
        this.u && this.start()
    };
    g.h.start = function() {
        var a = this.Ug + 15E3 * Math.random();
        g.jp(this.j, a);
        this.u = Date.now() + a
    };
    g.h.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.h.isActive = function() {
        return this.j.isActive()
    };
    g.h.reset = function() {
        this.j.stop();
        this.Ug = 5E3
    };
    g.Ua(T7, m1a);
    g.h = T7.prototype;
    g.h.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.h.wg = function(a) {
        return this.B.wg(a)
    };
    g.h.X = function(a, b) {
        return this.B.X.apply(this.B, arguments)
    };
    g.h.dispose = function() {
        this.W || (this.W = !0, g.of(this.B), this.disconnect(), g.of(this.u), this.u = null, this.Y = function() {
            return ""
        })
    };
    g.h.isDisposed = function() {
        return this.W
    };
    g.h.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.V = "";
            this.u.stop();
            this.I = a || null;
            this.D = b || 0;
            a = this.oa + "/test";
            b = this.oa + "/bind";
            var d = new I7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.va),
                e = this.j;
            e && (e.Ng = null);
            d.Ng = this;
            this.j = d;
            U7(this);
            if (this.j) {
                d = g.P("ID_TOKEN");
                var f = this.j.Bl || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Bl = f
            }
            e ? (3 != e.getState() && 0 == f1a(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.Ft)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.h.disconnect = function(a) {
        this.N = a || 0;
        this.u.stop();
        U7(this);
        this.j && (3 == this.j.getState() && h1a(this.j), this.j.disconnect());
        this.N = 0
    };
    g.h.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Yf(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Ju() && (U7(this), e1a(this.j, a))
    };
    g.h.GK = function() {
        this.u.reset();
        this.I = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) e1a(this.j, a[b])
        }
        this.X("handlerOpened")
    };
    g.h.EK = function(a) {
        var b = 2 == a && 401 == this.j.Cl;
        4 == a || b || this.u.start();
        this.X("handlerError", a, b)
    };
    g.h.gE = function(a, b) {
        if (!this.u.isActive()) this.X("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        this.ma.j.SK("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");
        a && this.Fa.j.jE("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Ia.j.jE("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.h.HK = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.N && (a.ui = "" + this.N);
        this.I && g.Yf(a, this.I);
        return a
    };
    g.h.FK = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.X("handlerMessage", new p1a(a[0], a[1]))
    };
    g.h.Ju = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.h.jo = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Da && this.j) {
            var b = this.j.Bl || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Bl = b
        }
    };
    g.h.kp = function() {
        return this.J.id
    };
    g.h.wp = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.h.Bs = function() {
        var a = this.u;
        g.kp(a.j);
        a.start()
    };
    g.h.r0 = function() {
        this.u.isActive();
        0 == f1a(this.j) && this.connect(this.I, this.D)
    };
    V7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    V7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    V7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.w(Y7, g.qg);
    g.h = Y7.prototype;
    g.h.connect = function(a, b, c) {
        this.Nc.connect(a, b, c)
    };
    g.h.disconnect = function(a) {
        this.Nc.disconnect(a)
    };
    g.h.Bs = function() {
        this.Nc.Bs()
    };
    g.h.kp = function() {
        return this.Nc.kp()
    };
    g.h.wp = function() {
        return this.Nc.wp()
    };
    g.h.Ju = function() {
        return this.Nc.Ju()
    };
    g.h.OS = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Nc,
            b = this.j;
        g.Sv("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.AD,
            sessionId: a.j.C,
            arrayId: a.j.Ft
        });
        g.Sv("yt-remote-session-screen-id", b);
        a = z6();
        b = B6();
        g.Ub(a, b) || a.push(b);
        I_a(a);
        C6()
    };
    g.h.MS = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.NS = function(a) {
        this.dispatchEvent(new Q7(a))
    };
    g.h.onError = function(a) {
        this.dispatchEvent(new R7(a ? 1 : 0))
    };
    g.h.sendMessage = function(a, b) {
        this.Nc.sendMessage(a, b)
    };
    g.h.jo = function(a) {
        this.Nc.jo(a)
    };
    g.h.dispose = function() {
        this.Nc.dispose()
    };
    g.h = q1a.prototype;
    g.h.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.I && (this.B.stop(), this.N = a, this.J = b, Z7(this), (a = g.P("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.vX && (this.u.mdxVersion = "" + this.j.vX), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui,
            Object.assign(this.u, this.N), this.channel = new r7(this.pathPrefix, {
                TW: "gsessionid",
                yX: this.C,
                zX: this.u
            }), this.channel.open(), this.I = 2, r1a(this))
    };
    g.h.disconnect = function(a) {
        this.V = void 0 === a ? 0 : a;
        this.B.stop();
        Z7(this);
        this.channel && (0 !== this.V ? this.u.ui = "" + this.V : delete this.u.ui, this.channel.close());
        this.V = 0
    };
    g.h.wp = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.h.Bs = function() {
        var a = this.B;
        g.kp(a.j);
        a.start()
    };
    g.h.sendMessage = function(a, b) {
        this.channel && (Z7(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.h.jo = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.h.kp = function() {
        return this.j ? this.j.id : ""
    };
    g.h.X = function(a) {
        return this.D.X.apply(this.D, [a].concat(g.u(g.Ca.apply(1, arguments))))
    };
    g.h.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.h.wg = function(a) {
        return this.D.wg(a)
    };
    g.h.dispose = function() {
        this.W || (this.W = !0, g.of(this.D), this.disconnect(), g.of(this.B), this.ma = function() {
            return ""
        })
    };
    g.h.isDisposed = function() {
        return this.W
    };
    g.w($7, g.qg);
    g.h = $7.prototype;
    g.h.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.h.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.h.Bs = function() {
        this.j.Bs()
    };
    g.h.kp = function() {
        return this.j.kp()
    };
    g.h.wp = function() {
        return this.j.wp()
    };
    g.h.Ju = function() {
        return 3 === this.j.I
    };
    g.h.RS = function() {
        this.dispatchEvent("channelOpened")
    };
    g.h.PS = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.QS = function(a) {
        this.dispatchEvent(new Q7(a))
    };
    g.h.onError = function() {
        this.dispatchEvent(new R7(401 === this.j.Y ? 1 : 0))
    };
    g.h.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.h.jo = function(a) {
        this.j.jo(a)
    };
    g.h.dispose = function() {
        this.j.dispose()
    };
    var z1a = Date.now(),
        a8 = null,
        e8 = Array(50),
        d8 = -1,
        f8 = !1;
    g.Ua(g8, g.Vu);
    g8.prototype.Pi = function() {
        return this.screens
    };
    g8.prototype.contains = function(a) {
        return !!x6(this.screens, a)
    };
    g8.prototype.get = function(a) {
        return a ? y6(this.screens, a) : null
    };
    g8.prototype.info = function(a) {
        b8(this.I, a)
    };
    g.w(h8, g.Vu);
    g.h = h8.prototype;
    g.h.start = function() {
        !this.j && isNaN(this.pc) && this.nQ()
    };
    g.h.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.pc) || (g.fr(this.pc), this.pc = NaN)
    };
    g.h.ea = function() {
        this.stop();
        g.Vu.prototype.ea.call(this)
    };
    g.h.nQ = function() {
        this.pc = NaN;
        this.j = g.ir(W7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(this.US, this),
            onError: (0, g.Ra)(this.SS, this),
            onTimeout: (0, g.Ra)(this.VS, this)
        })
    };
    g.h.US = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.I;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.X("pairingComplete", new s6(a), b)
    };
    g.h.SS = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= l3a.length ? this.X("pairingFailed", Error("DIAL polling timed out")) : (a = l3a[this.u], this.pc = g.dr((0, g.Ra)(this.nQ, this), a), this.u++) : this.X("pairingFailed", Error("Server error " + a.status))
    };
    g.h.VS = function() {
        this.j = null;
        this.X("pairingFailed", Error("Server not responding"))
    };
    var l3a = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ua(j8, g8);
    g.h = j8.prototype;
    g.h.start = function() {
        i8(this) && this.X("screenChange");
        !g.Tv("yt-remote-lounge-token-expiration") && D1a(this);
        g.fr(this.j);
        this.j = g.dr((0, g.Ra)(this.start, this), 1E4)
    };
    g.h.add = function(a, b) {
        i8(this);
        A1a(this, a);
        k8(this, !1);
        this.X("screenChange");
        b(a);
        a.token || D1a(this)
    };
    g.h.remove = function(a, b) {
        var c = i8(this);
        C1a(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.X("screenChange")
    };
    g.h.yD = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.X("screenChange")
    };
    g.h.ea = function() {
        g.fr(this.j);
        j8.He.ea.call(this)
    };
    g.h.sW = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && b8(this.I, "Missed " + b + " lounge tokens.")
    };
    g.h.rW = function(a) {
        b8(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.w(m8, g.Vu);
    g.h = m8.prototype;
    g.h.start = function() {
        var a = parseInt(g.Tv("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Ta() - 144E5 < a ? 0 : a) ? p8(this): (this.C = g.Ta() + 3E5, g.Sv("yt-remote-fast-check-period", this.C), this.HI())
    };
    g.h.isEmpty = function() {
        return g.Qf(this.j)
    };
    g.h.update = function() {
        l8("Updating availability on schedule.");
        var a = this.I(),
            b = g.Cf(this.j, function(c, d) {
                return c && !!y6(a, d)
            }, this);
        o8(this, b)
    };
    g.h.ea = function() {
        g.fr(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.Vu.prototype.ea.call(this)
    };
    g.h.HI = function() {
        g.fr(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = F1a(this);
        if (o6(a)) {
            var b = W7(this.D, "/pairing/get_screen_availability");
            this.u = X7(this.D, b, {
                lounge_token: g.Jf(a).join(",")
            }, (0, g.Ra)(this.XZ, this, a), (0, g.Ra)(this.WZ, this))
        } else o8(this, {}), p8(this)
    };
    g.h.XZ = function(a, b) {
        this.u = null;
        var c = g.Jf(F1a(this));
        if (g.kc(c, g.Jf(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            o8(this, c);
            p8(this)
        } else this.Xe("Changing Screen set during request."), this.HI()
    };
    g.h.WZ = function(a) {
        this.Xe("Screen availability failed: " + a);
        this.u = null;
        p8(this)
    };
    g.h.Xe = function(a) {
        b8("OnlineScreenService", a)
    };
    g.Ua(q8, g8);
    g.h = q8.prototype;
    g.h.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.X("screenChange"), this.j.isEmpty() || this.X("onlineScreenChange"))
    };
    g.h.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.h.yD = function(a, b, c, d) {
        this.u.contains(a) ? this.u.yD(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b8(this.I, a), d(Error(a)))
    };
    g.h.Pi = function(a) {
        return a ? this.screens : g.ac(this.screens, g.sn(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.h.IK = function() {
        return g.sn(this.Pi(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.h.JK = function(a, b, c, d, e, f) {
        var k = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new h8(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.of(l);
            e(r8(k, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.of(l);
            f(m)
        });
        l.start();
        return (0, g.Ra)(l.stop, l)
    };
    g.h.WS = function(a, b, c, d) {
        g.ir(W7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(function(e, f) {
                e = new s6(f.screen || {});
                if (!e.name || J1a(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var k = 2, l = b(f, k); J1a(this, l);) {
                            k++;
                            if (20 < k) break a;
                            l = b(f, k)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(r8(this, e))
            }, this),
            onError: (0, g.Ra)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ra)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.ea = function() {
        g.of(this.u);
        g.of(this.j);
        q8.He.ea.call(this)
    };
    g.h.DW = function() {
        L1a(this);
        this.X("screenChange");
        this.j.update()
    };
    q8.prototype.dispose = q8.prototype.dispose;
    g.Ua(t8, g.Vu);
    g.h = t8.prototype;
    g.h.getScreen = function() {
        return this.C
    };
    g.h.uh = function(a) {
        this.isDisposed() || (a && (v8(this, "" + a), this.X("sessionFailed")), this.C = null, this.X("sessionScreen", null))
    };
    g.h.info = function(a) {
        b8(this.va, a)
    };
    g.h.KK = function() {
        return null
    };
    g.h.aJ = function(a) {
        var b = this.j;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ra)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ra)(function() {
            v8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.h.ea = function() {
        this.aJ("");
        t8.He.ea.call(this)
    };
    g.w(w8, t8);
    g.h = w8.prototype;
    g.h.ZI = function(a) {
        if (this.u) {
            if (this.u == a) return;
            v8(this, "Overriding cast session with new session object");
            U1a(this);
            this.oa = !1;
            this.V = "unknown";
            this.u.removeUpdateListener(this.Y);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma)
        }
        this.u = a;
        this.u.addUpdateListener(this.Y);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma);
        Q1a(this, "getMdxSessionStatus")
    };
    g.h.Ru = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Gi(a))
    };
    g.h.stop = function() {
        this.u ? this.u.stop((0, g.Ra)(function() {
            this.uh()
        }, this), (0, g.Ra)(function() {
            this.uh(Error("Failed to stop receiver app."))
        }, this)) : this.uh(Error("Stopping cast device without session."))
    };
    g.h.aJ = function() {};
    g.h.ea = function() {
        this.info("disposeInternal");
        U1a(this);
        this.u && (this.u.removeUpdateListener(this.Y), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma));
        this.u = null;
        t8.prototype.ea.call(this)
    };
    g.h.J_ = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = p6(b), g.Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Gi(b)), a) {
                    case "mdxSessionStatus":
                        O1a(this, b);
                        break;
                    case "loungeToken":
                        R1a(this, b);
                        break;
                    default:
                        v8(this, "Unknown youtube message: " + a)
                } else v8(this, "Unable to parse message.");
                else v8(this, "No data in message.")
    };
    g.h.JN = function(a, b, c, d) {
        g.fr(this.N);
        this.N = 0;
        I1a(this.B, this.j.label, a, this.j.friendlyName, (0, g.Ra)(function(e) {
            e ? b(e) : 0 <= d ? (v8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.N = g.dr((0, g.Ra)(this.JN, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.h.KK = function() {
        return this.u
    };
    g.h.XS = function(a) {
        this.isDisposed() || a || (v8(this, "Cast session died."), this.uh())
    };
    g.w(z8, t8);
    g.h = z8.prototype;
    g.h.ZI = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Da)
    };
    g.h.Ru = function(a) {
        this.Fa = a;
        this.W()
    };
    g.h.stop = function() {
        a2a(this);
        this.u ? this.u.stop((0, g.Ra)(this.uh, this, null), (0, g.Ra)(this.uh, this, "Failed to stop DIAL device.")) : this.uh()
    };
    g.h.ea = function() {
        a2a(this);
        this.u && this.u.removeUpdateListener(this.Da);
        this.u = null;
        t8.prototype.ea.call(this)
    };
    g.h.YS = function(a) {
        this.isDisposed() || a || (v8(this, "DIAL session died."), this.D(), this.D = function() {}, this.uh())
    };
    g.w(D8, t8);
    D8.prototype.stop = function() {
        this.uh()
    };
    D8.prototype.ZI = function() {};
    D8.prototype.Ru = function() {
        g.fr(this.u);
        this.u = NaN;
        var a = y6(this.B.Pi(), this.j.label);
        a ? u8(this, a) : this.uh(Error("No such screen"))
    };
    D8.prototype.ea = function() {
        g.fr(this.u);
        this.u = NaN;
        t8.prototype.ea.call(this)
    };
    g.w(E8, g.Vu);
    g.h = E8.prototype;
    g.h.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.N, [chrome.cast.Capability.AUDIO_OUT]);
        this.V || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ra)(this.IZ, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ra)(this.WP, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ra)(this.DY, this);
        chrome.cast.initialize(c, (0, g.Ra)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), w1a(), this.u.subscribe("onlineScreenChange", (0, g.Ra)(this.LK, this)), this.B = d2a(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function(f) {
                this.Xe("Failed to set initial custom receivers: " + g.Gi(f))
            }, this)), this.X("yt-remote-cast2-availability-change", G8(this)), b(!0))
        }, this), (0, g.Ra)(function(f) {
            this.Xe("Failed to initialize API: " + g.Gi(f));
            b(!1)
        }, this))
    };
    g.h.v0 = function(a, b) {
        F8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.getScreen();
            if (!a || c && c.id != a) F8("Unsetting old screen status: " + this.j.j.friendlyName), H8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = y6(this.u.Pi(), a);
                if (!c) {
                    F8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    F8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = b2a(this, c);
                a || (F8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function(d) {
                    this.Xe("Failed to set initial custom receivers: " + g.Gi(d))
                }, this)));
                F8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                H8(this, new D8(this.u, a), !0)
            }
            this.j.aJ(b)
        } else F8("setConnectedScreenStatus: no screen.")
    };
    g.h.w0 = function(a) {
        this.isDisposed() ? this.Xe("Setting connection data on disposed cast v2") : this.j ? this.j.Ru(a) : this.Xe("Setting connection data without a session")
    };
    g.h.aT = function() {
        this.isDisposed() ? this.Xe("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), H8(this, null)) : F8("Stopping non-existing session")
    };
    g.h.requestSession = function() {
        chrome.cast.requestSession((0, g.Ra)(this.WP, this), (0, g.Ra)(this.a_, this))
    };
    g.h.ea = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ra)(this.LK, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = t1a,
            b = g.Ja("yt.mdx.remote.debug.handlers_");
        g.Zb(b || [], a);
        g.of(this.j);
        g.Vu.prototype.ea.call(this)
    };
    g.h.Xe = function(a) {
        b8("Controller", a)
    };
    g.h.YP = function(a, b) {
        this.j == a && (b || H8(this, null), this.X("yt-remote-cast2-session-change", b))
    };
    g.h.FZ = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), F8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.j.label != a.label) F8("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop();
                        else {
                            F8("onReceiverAction_: Casting to active receiver.");
                            this.j.getScreen() && this.X("yt-remote-cast2-session-change", this.j.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            H8(this,
                                new D8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            H8(this, new z8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            H8(this, new w8(this.u, a, this.config_));
                            break;
                        default:
                            this.Xe("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.j.label == a.label ? this.j.stop() : this.Xe("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Xe("onReceiverAction_ called without receiver.")
    };
    g.h.DY = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Xe("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.j : null;
        if (!c || c.label != b.label) return this.Xe("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return F8("Reselecting dial screen."),
                this.X("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Xe('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            H8(this, new z8(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.N = a;
        b.N.appState == chrome.cast.DialAppState.RUNNING ? (a = b.N.extraData || {}, c = a.screenId || null, A8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Y1a(b, {
            name: b.j.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.N.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Oq(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Z1a(b, c)) : a = Z1a(b, c)) : a = C8(b);
        return a
    };
    g.h.WP = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            F8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) F8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), H8(this, new w8(this.u, c, this.config_), !0);
                    else {
                        this.Xe("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.j,
                    e = y6(this.u.Pi(),
                        d.label);
                e && t6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (F8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.of(this.j), this.j = new w8(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ra)(this.YP, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return c2a(b, b.j)
                }), this.j.Ru(null));
                this.j.ZI(a)
            }
        }
    };
    g.h.ZS = function() {
        return this.j ? this.j.KK() : null
    };
    g.h.a_ = function(a) {
        this.isDisposed() || (this.Xe("Failed to estabilish a session: " + g.Gi(a)), a.code != chrome.cast.ErrorCode.CANCEL && H8(this, null), this.X("yt-remote-cast2-session-failed"))
    };
    g.h.IZ = function(a) {
        F8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = G8(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            G8(this) != b && this.X("yt-remote-cast2-availability-change", G8(this))
        }
    };
    g.h.LK = function() {
        this.isDisposed() || (this.B = d2a(this), F8("Updating custom receivers: " + g.Gi(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function() {
            this.Xe("Failed to set custom receivers.")
        }, this)), this.X("yt-remote-cast2-availability-change", G8(this)))
    };
    E8.prototype.setLaunchParams = E8.prototype.w0;
    E8.prototype.setConnectedScreenStatus = E8.prototype.v0;
    E8.prototype.stopSession = E8.prototype.aT;
    E8.prototype.getCastSession = E8.prototype.ZS;
    E8.prototype.requestSession = E8.prototype.requestSession;
    E8.prototype.init = E8.prototype.init;
    E8.prototype.dispose = E8.prototype.dispose;
    var N8 = [];
    g.h = S8.prototype;
    g.h.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        T8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.gm = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.N = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.h.Lc = function() {
        return 1 == this.playerState
    };
    g.h.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.h.Wk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.h.getDuration = function() {
        return this.u ? this.D + U8(this) : this.D
    };
    g.h.clone = function() {
        return new S8(Y8(this))
    };
    g.w($8, g.Vu);
    g.h = $8.prototype;
    g.h.getState = function() {
        return this.B
    };
    g.h.wp = function() {
        return this.C.getReconnectTimeout()
    };
    g.h.Bs = function() {
        this.C.reconnect()
    };
    g.h.play = function() {
        b9(this) ? (this.j ? this.j.play(null, g.wg, g9(this, "play")) : f9(this, "play"), e9(this, 1, W8(a9(this))), this.X("remotePlayerChange")) : c9(this, this.play)
    };
    g.h.pause = function() {
        b9(this) ? (this.j ? this.j.pause(null, g.wg, g9(this, "pause")) : f9(this, "pause"), e9(this, 2, W8(a9(this))), this.X("remotePlayerChange")) : c9(this, this.pause)
    };
    g.h.seekTo = function(a) {
        if (b9(this)) {
            if (this.j) {
                var b = a9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Lc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.wg, g9(this, "seekTo", {
                    newTime: a
                }))
            } else f9(this, "seekTo", {
                newTime: a
            });
            e9(this, 3, a);
            this.X("remotePlayerChange")
        } else c9(this, g.Sa(this.seekTo, a))
    };
    g.h.stop = function() {
        if (b9(this)) {
            this.j ? this.j.stop(null, g.wg, g9(this, "stopVideo")) : f9(this, "stopVideo");
            var a = a9(this);
            a.index = -1;
            a.videoId = "";
            T8(a);
            d9(this, a);
            this.X("remotePlayerChange")
        } else c9(this, this.stop)
    };
    g.h.setVolume = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ra)(function() {
                        c8("set receiver volume: " + d)
                    }, this), (0, g.Ra)(function() {
                        this.Xe("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ra)(function() {
                    c8("set receiver muted: " + b)
                }, this), (0, g.Ra)(function() {
                    this.Xe("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                f9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            d9(this, c)
        } else c9(this, g.Sa(this.setVolume, a, b))
    };
    g.h.MK = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Gi(b.style), g.Yf(a, c.trackData));
            f9(this, "setSubtitlesTrack", a);
            d9(this, c)
        } else c9(this, g.Sa(this.MK, a, b))
    };
    g.h.setAudioTrack = function(a, b) {
        b9(this) ? (b = b.getLanguageInfo().getId(), f9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = a9(this), a.audioTrackId = b, d9(this, a)) : c9(this, g.Sa(this.setAudioTrack, a, b))
    };
    g.h.playVideo = function(a, b, c, d, e, f, k) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        k = void 0 === k ? null : k;
        var l = a9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        X8(l, a, c || 0);
        void 0 !== b && (V8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        k && (m.locationInfo = g.Gi(k));
        f9(this, "setPlaylist", m);
        d || d9(this, l)
    };
    g.h.MC = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "previous")
        } else c9(this, g.Sa(this.MC, a, b))
    };
    g.h.nextVideo = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "next")
        } else c9(this, g.Sa(this.nextVideo, a, b))
    };
    g.h.Xt = function() {
        if (b9(this)) {
            f9(this, "clearPlaylist");
            var a = a9(this);
            a.reset();
            d9(this, a);
            this.X("remotePlayerChange")
        } else c9(this, this.Xt)
    };
    g.h.dN = function() {
        b9(this) ? f9(this, "dismissAutoplay") : c9(this, this.dN)
    };
    g.h.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.X("proxyStateChange", a, this.B)
        }
        g.Vu.prototype.dispose.call(this)
    };
    g.h.ea = function() {
        p2a(this);
        this.C = null;
        this.D.clear();
        Z8(this, null);
        g.Vu.prototype.ea.call(this)
    };
    g.h.bJ = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.X("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.h.DZ = function(a, b) {
        this.X(a, b)
    };
    g.h.sY = function(a) {
        if (!a) this.My(null), Z8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = a9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, d9(this, b)
        }
    };
    g.h.My = function(a) {
        c8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.N);
        if (this.j = a) this.j.addUpdateListener(this.N), q2a(this), this.X("remotePlayerChange")
    };
    g.h.rY = function(a) {
        a ? (q2a(this), this.X("remotePlayerChange")) : this.My(null)
    };
    g.h.yJ = function() {
        f9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.h.vY = function() {
        var a = m2a();
        a && Z8(this, a)
    };
    g.h.Xe = function(a) {
        b8("CP", a)
    };
    g.w(j9, g.Vu);
    g.h = j9.prototype;
    g.h.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                k = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            k && (m.clickTrackingParams = k);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Da && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            V8(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Da ? "setInitialState" : "setPlaylist";
            h9("Connecting with " + c + " and params: " + g.Gi(m));
            this.u.connect({
                method: c,
                params: g.Gi(m)
            }, a, J_a())
        } else h9("Connecting without params"), this.u.connect({}, a, J_a());
        u2a(this)
    };
    g.h.jo = function(a) {
        this.u.jo(a)
    };
    g.h.dispose = function() {
        this.isDisposed() || (g.Ia("yt.mdx.remote.remoteClient_", null), this.X("beforeDispose"), i9(this, 3));
        g.Vu.prototype.dispose.call(this)
    };
    g.h.ea = function() {
        k9(this);
        m9(this);
        l9(this);
        g.fr(this.N);
        this.N = NaN;
        g.fr(this.V);
        this.V = NaN;
        this.C = null;
        g.bu(this.W);
        this.W.length = 0;
        this.u.dispose();
        g.Vu.prototype.ea.call(this);
        this.D = this.J = this.B = this.j = this.u = null
    };
    g.h.qO = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.r(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.h.lW = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Rx()) ? this.u.Ju() && isNaN(this.I) && (a = 1) : a = 2);
        return a
    };
    g.h.nu = function(a) {
        h9("Disconnecting with " + a);
        g.Ia("yt.mdx.remote.remoteClient_", null);
        k9(this);
        this.X("beforeDisconnect", a);
        1 == a && D6();
        this.u.disconnect(a);
        this.dispose()
    };
    g.h.jW = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), X8(a, this.C, a.index));
        return Y8(a)
    };
    g.h.x0 = function(a) {
        var b = this,
            c = new S8(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.fr(this.N), this.N = g.dr(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && n9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && W8(this.j) == W8(c) && g.Gi(this.j.trackData) == g.Gi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.mc(d, function(e) {
            this.X(e)
        }, this)
    };
    g.h.IN = function() {
        var a = this.u.kp(),
            b = g.Qb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.h.Rx = function() {
        return this.u.wp()
    };
    g.h.gW = function() {
        return this.D || "UNSUPPORTED"
    };
    g.h.hW = function() {
        return this.J || ""
    };
    g.h.bT = function() {
        !isNaN(this.Rx()) && this.u.Bs()
    };
    g.h.u0 = function(a, b) {
        n9(this, a, b);
        w2a(this)
    };
    g.h.NK = function() {
        var a = g.sr("SID", "") || "",
            b = g.sr("SAPISID", "") || "",
            c = g.sr("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.xc(g.fb(a), 2);
        b = g.xc(g.fb(b), 2);
        c = g.xc(g.fb(c), 2);
        return g.xc(g.fb(a + "," + b + "," + c), 2)
    };
    j9.prototype.subscribe = j9.prototype.subscribe;
    j9.prototype.unsubscribeByKey = j9.prototype.wg;
    j9.prototype.getProxyState = j9.prototype.lW;
    j9.prototype.disconnect = j9.prototype.nu;
    j9.prototype.getPlayerContextData = j9.prototype.jW;
    j9.prototype.setPlayerContextData = j9.prototype.x0;
    j9.prototype.getOtherConnectedRemoteId = j9.prototype.IN;
    j9.prototype.getReconnectTimeout = j9.prototype.Rx;
    j9.prototype.getAutoplayMode = j9.prototype.gW;
    j9.prototype.getAutoplayVideoId = j9.prototype.hW;
    j9.prototype.reconnect = j9.prototype.bT;
    j9.prototype.sendMessage = j9.prototype.u0;
    j9.prototype.getXsrfToken = j9.prototype.NK;
    j9.prototype.isCapabilitySupportedOnConnectedDevices = j9.prototype.qO;
    g.w(o9, g8);
    g.h = o9.prototype;
    g.h.Pi = function(a) {
        return this.Ef.$_gs(a)
    };
    g.h.contains = function(a) {
        return !!this.Ef.$_c(a)
    };
    g.h.get = function(a) {
        return this.Ef.$_g(a)
    };
    g.h.start = function() {
        this.Ef.$_st()
    };
    g.h.add = function(a, b, c) {
        this.Ef.$_a(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.Ef.$_r(a, b, c)
    };
    g.h.yD = function(a, b, c, d) {
        this.Ef.$_un(a, b, c, d)
    };
    g.h.ea = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Ef.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Ef = null;
        g8.prototype.ea.call(this)
    };
    g.h.cT = function() {
        this.X("screenChange")
    };
    g.h.lZ = function() {
        this.X("onlineScreenChange")
    };
    q8.prototype.$_st = q8.prototype.start;
    q8.prototype.$_gspc = q8.prototype.WS;
    q8.prototype.$_gsppc = q8.prototype.JK;
    q8.prototype.$_c = q8.prototype.contains;
    q8.prototype.$_g = q8.prototype.get;
    q8.prototype.$_a = q8.prototype.add;
    q8.prototype.$_un = q8.prototype.yD;
    q8.prototype.$_r = q8.prototype.remove;
    q8.prototype.$_gs = q8.prototype.Pi;
    q8.prototype.$_gos = q8.prototype.IK;
    q8.prototype.$_s = q8.prototype.subscribe;
    q8.prototype.$_ubk = q8.prototype.wg;
    var B9 = null,
        H9 = !1,
        p9 = null,
        q9 = null,
        G9 = null,
        u9 = [];
    g.w(I9, g.G);
    g.h = I9.prototype;
    g.h.ea = function() {
        g.G.prototype.ea.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Zb;
        a.unsubscribe("proxyStateChange", this.VP, this);
        a.unsubscribe("remotePlayerChange", this.Ry, this);
        a.unsubscribe("remoteQueueChange", this.zC, this);
        a.unsubscribe("previousNextChange", this.SP, this);
        a.unsubscribe("nowAutoplaying", this.MP, this);
        a.unsubscribe("autoplayDismissed", this.qP, this);
        this.Zb = this.u = null
    };
    g.h.Ek = function(a) {
        var b = g.Ca.apply(1, arguments);
        if (2 != this.Zb.B)
            if (J9(this)) {
                if (!a9(this.Zb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        a9(this.Zb).Lc() ? this.Zb.pause() : this.Zb.play();
                        break;
                    case "control_play":
                        this.Zb.play();
                        break;
                    case "control_pause":
                        this.Zb.pause();
                        break;
                    case "control_seek":
                        this.J.CE(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        K9(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.G.getCurrentTime();
                    L9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    L9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    K9(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.h.pY = function(a) {
        this.N.yU(a)
    };
    g.h.m1 = function(a) {
        this.Ek("control_subtitles_set_track", g.Qf(a) ? null : a)
    };
    g.h.pR = function() {
        var a = this.G.getOption("captions", "track");
        g.Qf(a) || K9(this, a)
    };
    g.h.Qb = function(a) {
        this.u.Qb(a, this.G.getVideoData().lengthSeconds)
    };
    g.h.WY = function() {
        g.Qf(this.C) || S2a(this, this.C);
        this.D = !1
    };
    g.h.VP = function(a, b) {
        this.B.stop();
        2 === b && this.iR()
    };
    g.h.Ry = function() {
        if (J9(this)) {
            this.j.stop();
            var a = a9(this.Zb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.gg = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.gg = 0;
                    break;
                default:
                    this.u.gg = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Tb(new g.KF(8));
                    this.hR();
                    break;
                case 1085:
                case 3:
                    this.Tb(new g.KF(9));
                    break;
                case 1083:
                case 0:
                    this.Tb(new g.KF(2));
                    this.J.stop();
                    this.Qb(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Tb(new g.KF(4));
                    break;
                case 2:
                    this.Tb(new g.KF(4));
                    this.Qb(W8(a));
                    break;
                case -1:
                    this.Tb(new g.KF(64));
                    break;
                case -1E3:
                    this.Tb(new g.KF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa.",
                        YA: 2
                    }))
            }
            a = a9(this.Zb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, S2a(this, a));
            a = a9(this.Zb); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.V.isActive() ||
                this.QR()
        } else R2a(this)
    };
    g.h.SP = function() {
        this.G.X("mdxpreviousnextchange")
    };
    g.h.zC = function() {
        J9(this) || R2a(this)
    };
    g.h.MP = function(a) {
        isNaN(a) || this.G.X("mdxnowautoplaying", a)
    };
    g.h.qP = function() {
        this.G.X("mdxautoplaycanceled")
    };
    g.h.setAudioTrack = function(a) {
        J9(this) && this.Zb.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.h.seekTo = function(a, b) {
        -1 === a9(this.Zb).playerState ? L9(this, a) : b && this.Zb.seekTo(a)
    };
    g.h.QR = function() {
        var a = this;
        if (J9(this)) {
            var b = a9(this.Zb);
            this.events.wc(this.W);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.W = this.events.P(this.G, "onVolumeChange", function(c) {
                Q2a(a, c)
            })
        }
    };
    g.h.hR = function() {
        this.j.stop();
        if (!this.Zb.isDisposed()) {
            var a = a9(this.Zb);
            a.Lc() && this.Tb(new g.KF(8));
            this.Qb(W8(a));
            this.j.start()
        }
    };
    g.h.iR = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Zb.wp();
        2 == this.Zb.B && !isNaN(a) && this.B.start()
    };
    g.h.Tb = function(a) {
        this.B.stop();
        var b = this.I;
        if (!g.PF(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.I, 2) && this.G.Gv(c);
            this.I = a;
            U2a(this.u, b, a)
        }
    };
    g.w(M9, g.W);
    M9.prototype.wd = function() {
        this.j.show()
    };
    M9.prototype.Eb = function() {
        this.j.hide()
    };
    M9.prototype.u = function() {
        q6("mdx-privacy-popup-cancel");
        this.Eb()
    };
    M9.prototype.B = function() {
        q6("mdx-privacy-popup-confirm");
        this.Eb()
    };
    g.w(N9, g.W);
    N9.prototype.onStateChange = function(a) {
        T2a(this, a.state)
    };
    g.w(O9, g.WM);
    O9.prototype.D = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.bq = g.nc(a, this.j, this), g.XM(this, g.Bl(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.mj(a), this.enable(!0)) : this.enable(!1)
    };
    O9.prototype.j = function(a) {
        return a.key
    };
    O9.prototype.nk = function(a) {
        return "cast-selector-receiver" === a ? "Truy\u1ec1n..." : this.bq[a].name
    };
    O9.prototype.xg = function(a) {
        g.WM.prototype.xg.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.bq[a]);
        this.kb.Eb()
    };
    g.w(P9, g.CJ);
    g.h = P9.prototype;
    g.h.create = function() {
        var a = this.player.S(),
            b = g.dC(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        L2a(b, a);
        this.subscriptions.push(g.uu("yt-remote-before-disconnect", this.nY, this));
        this.subscriptions.push(g.uu("yt-remote-connection-change", this.JZ, this));
        this.subscriptions.push(g.uu("yt-remote-receiver-availability-change", this.UP,
            this));
        this.subscriptions.push(g.uu("yt-remote-auto-connect", this.HZ, this));
        this.subscriptions.push(g.uu("yt-remote-receiver-resumed", this.GZ, this));
        this.subscriptions.push(g.uu("mdx-privacy-popup-confirm", this.V_, this));
        this.subscriptions.push(g.uu("mdx-privacy-popup-cancel", this.U_, this));
        this.UP()
    };
    g.h.load = function() {
        this.player.cancelPlayback();
        g.CJ.prototype.load.call(this);
        this.pj = new I9(this, this.player, this.Zb);
        var a = (a = P2a()) ? a.currentTime : 0;
        var b = F9() ? new $8(z9(), void 0) : null;
        0 == a && b && (a = W8(a9(b)));
        0 !== a && this.Qb(a);
        U2a(this, this.Vd, this.Vd);
        this.player.Cm(6)
    };
    g.h.unload = function() {
        this.player.X("mdxautoplaycanceled");
        this.Uo = this.qm;
        g.pf(this.pj, this.Zb);
        this.Zb = this.pj = null;
        g.CJ.prototype.unload.call(this);
        this.player.Cm(5);
        Q9(this)
    };
    g.h.ea = function() {
        g.vu(this.subscriptions);
        g.CJ.prototype.ea.call(this)
    };
    g.h.tm = function(a) {
        var b = g.Ca.apply(1, arguments);
        this.loaded && this.pj.Ek.apply(this.pj, [a].concat(g.u(b)))
    };
    g.h.getAdState = function() {
        return this.gg
    };
    g.h.gm = function() {
        return this.Zb ? a9(this.Zb).gm : !1
    };
    g.h.hasNext = function() {
        return this.Zb ? a9(this.Zb).hasNext : !1
    };
    g.h.Qb = function(a, b) {
        this.DO = a || 0;
        this.player.X("progresssync", a, b);
        this.player.La("onVideoProgress", a || 0)
    };
    g.h.getCurrentTime = function() {
        return this.DO
    };
    g.h.getProgressState = function() {
        var a = a9(this.Zb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.S().L("web_player_mdx_allow_seeking_change_killswitch") ? this.player.Pf() : !a.isAdPlaying() && this.player.Pf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + U8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + U8(a) : a.j) - this.getCurrentTime(),
            loaded: a.N,
            seekableEnd: a.u ? a.j + U8(a) : a.j,
            seekableStart: 0 <
                a.C ? a.C + U8(a) : a.C
        }
    };
    g.h.nextVideo = function() {
        this.Zb && this.Zb.nextVideo()
    };
    g.h.MC = function() {
        this.Zb && this.Zb.MC()
    };
    g.h.nY = function(a) {
        1 === a && (this.sI = this.Zb ? a9(this.Zb) : null)
    };
    g.h.JZ = function() {
        var a = F9() ? new $8(z9(), void 0) : null;
        if (a) {
            var b = this.Uo;
            this.loaded && this.unload();
            this.Zb = a;
            this.sI = null;
            b.key !== this.qm.key && (this.Uo = b, this.load())
        } else g.of(this.Zb), this.Zb = null, this.loaded && (this.unload(), (a = this.sI) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, W8(a)));
        this.player.X("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.UP = function() {
        var a = [this.qm],
            b = a.concat,
            c = M2a();
        O8() && g.Tv("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.bq = b.call(a, c);
        a = A9() || this.qm;
        R9(this, a);
        this.player.La("onMdxReceiversChange")
    };
    g.h.HZ = function() {
        var a = A9();
        R9(this, a)
    };
    g.h.GZ = function() {
        this.Uo = A9()
    };
    g.h.V_ = function() {
        this.Zy = !0;
        Q9(this);
        H9 = !1;
        B9 && D9(B9, 1);
        B9 = null
    };
    g.h.U_ = function() {
        this.Zy = !1;
        Q9(this);
        R9(this, this.qm);
        this.Uo = this.qm;
        H9 = !1;
        B9 = null;
        this.player.playVideo()
    };
    g.h.Yf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.bq;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Q8() : R9(this, b)), this.loaded ? this.Uo : this.qm;
            case "quickCast":
                return 2 === this.bq.length && "cast-selector-receiver" === this.bq[1].key ? (b && Q8(), !0) : !1
        }
    };
    g.h.yJ = function() {
        this.Zb.yJ()
    };
    g.h.aj = function() {
        return !1
    };
    g.h.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.BJ("remote", P9);
})(_yt_player);