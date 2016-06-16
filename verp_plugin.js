// mail_from.verp

'use strict';

exports.register = function() {
    var plugin = this;
    plugin.load_verp_domain_ini();
    plugin.register_hook('data_post', 'set_verp_mail_from');
};

exports.set_verp_mail_from = function (next, connection) {
    var transaction = connection.transaction;
    var verp = ("" + transaction.uuid + "-RJ-" + transaction.rcpt_to).replace(/@/,"=").replace(/>/,"").replace(/</,"") + '@' + this.cfg.rpdomain.server;
    transaction.mail_from = verp;
    this.loginfo("Writing Mail-From: " + transaction.mail_from);
    next();
};

exports.load_verp_domain_ini = function () {
    var plugin = this;
    plugin.cfg = plugin.config.get('verp_domain.ini', function () {
        plugin.load_bounce_ini();
    });
};
