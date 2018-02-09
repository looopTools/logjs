// Copyright 2018 Lars Nielsen
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
// PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
// TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

"use strict";

var logger = new Logger(null, null);
console.log("/-----------------------/");
console.log("Start test with out tag and timestamp");
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");


logger = new Logger(null, true);

console.log("/-----------------------/");
console.log("Start test without tag but with timestamp");
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");

logger = new Logger("logjs", true);

console.log("/-----------------------/");
console.log("Start test with tag and timestamp");
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");

logger = new Logger("logjs", false);

console.log("/-----------------------/");
console.log("Start test with tag and without timestamp");
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");


console.log("/-----------------------/");
console.log("Start test of factory");

var logger = (new LoggerFactory()).build();
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");

console.log("Start test of factory, with tag");

var factory = new LoggerFactory();
factory.setTag("logjs");
var logger = factory.build();

logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");

console.log("Start test of factory, with tag and timestamp");

var factory = new LoggerFactory();
factory.setTag("logjs");
factory.setTimestamp(true);
var logger = factory.build();

logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");

console.log("Start test of factory, with tag timestamp");

var factory = new LoggerFactory();
factory.setTimestamp(true);
var logger = factory.build();

logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");
