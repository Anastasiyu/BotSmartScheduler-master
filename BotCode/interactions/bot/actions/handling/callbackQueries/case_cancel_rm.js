const Extra = require('telegraf/extra');
const { Languages, LoadReplies } = require('../../../static/replies/repliesLoader');
const Format = require('../../../../processing/formatting');
const { DataBase, User, Chat } = require('../../../../../storage/dataBase/DataBase');
const { Schedule, GetOptions, ScheduleStates } = require('../../../../../storage/dataBase/TablesClasses/Schedule');
const { TrelloManager } = require('@alordash/node-js-trello');
const utils = require('../../../../processing/utilities');
const { StartTimeZoneDetermination } = require('../../technical');

/**
 * @param {*} ctx 
 * @param {Array.<Number>} tzPendingConfirmationUsers
 * @param {Array.<String>} trelloPendingConfirmationUsers 
 * @param {String} chatID 
 * @param {User} user 
 * @param {Languages} language 
 * @param {*} replies 
 */
 async function CaseCancelRm(ctx, tzPendingConfirmationUsers, trelloPendingConfirmationUsers, chatID, user, language, replies) {
   await DataBase.Schedules.RemoveSchedulesByState(chatID, ScheduleStates.invalid);
   try {
      ctx.deleteMessage();
   } catch (e) {
      console.error(e);
   }
}

module.exports = CaseCancelRm;