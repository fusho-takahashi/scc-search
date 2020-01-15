import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { VIDEO_DATA } from './VIDEO_DATA';
import { VideoInfo } from '../../src/app/shared/domain/model';

admin.initializeApp();

const db = admin.firestore();

exports.restoreVideoInfo = functions.https.onRequest(async (req, res) => {
  VIDEO_DATA.forEach(async (info: VideoInfo) => {
    await db.collection('videos').add(info);
  });
  res.status(200).send('success');
});
