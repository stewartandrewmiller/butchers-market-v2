import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminPackageBundlesEditController extends Controller {
  @action
  bundleSaved() {
    this.transitionToRoute('admin.package-bundles');
  }

  @action
  bundleCancelled() {
    this.transitionToRoute('admin.package-bundles');
  }
}
