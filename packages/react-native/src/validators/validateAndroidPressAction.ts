import { AndroidPressAction } from '../../types/NotificationAndroid';
import { isObject, isString, isUndefined } from '../utils';

export default function validateAndroidOnPressAction(
  pressAction: AndroidPressAction,
): AndroidPressAction {
  if (!isObject(pressAction)) {
    throw new Error("'onPressAction' expected an object value.");
  }

  if (!isString(pressAction.id) || pressAction.id.length === 0) {
    throw new Error("'key' expected a non-empty string value.");
  }

  const out: AndroidPressAction = {
    id: pressAction.id,
  };

  if (!isUndefined(pressAction.launchActivity)) {
    if (!isString(pressAction.launchActivity)) {
      throw new Error("'launchActivity' expected a string value.");
    }

    out.launchActivity = pressAction.launchActivity;
  }

  if (!isUndefined(pressAction.reactComponent)) {
    if (!isString(pressAction.reactComponent)) {
      throw new Error("'reactComponent' expected a string value.");
    }

    out.reactComponent = pressAction.reactComponent;
  }

  return out;
}