import Response from 'ember-cli-mirage/response';
import { upload } from 'ember-file-upload/mirage';

export default function() {
  // Allows us to access the Mirage server in the console using `window.server`.
  window.server = this;

  //this.timing = 400;
  this.namespace = '/data';

  this.get('/deliItems.json', 'deli-item');
  this.get('/events.json', 'event');
  this.get('/hours.json', 'hour');
  this.get('/meatBundles.json', 'meat-bundle');
  this.get('/meatProducts.json', 'meat-product');
  this.get('/packageBundles.json', 'package-bundle');
  this.get('/performances.json', 'performance');
  this.get('/reviews.json', 'review');

  //
  // Admin CRUD
  //
  this.namespace = '/server';

  this.get('/events.php', 'event', { coalesce: true });
  this.post('/events.php', 'event');
  this.put('/events.php', function({ events }, request) {
    let id = request.queryParams.id;
    let attrs = this.normalizedRequestAttrs('event');

    return events.find(id).update(attrs);
  });
  this.del('/events.php', function({ events }, request) {
    let id = request.queryParams.id;

    events.find(id).destroy();
  });

  this.post(
    '/imageUpload.php',
    upload(function(db, request) {
      return new Response(201, { location: request.requestBody.file.url }, {});
    })
  );

  this.post('/feedback.php', (server, request) => {
    let attrs = JSON.parse(request.requestBody);
    let errors = [];

    if (!attrs.name) {
      errors.push({ detail: { name: 'empty' } });
    }

    if (!attrs.email) {
      errors.push({ detail: { email: 'empty' } });
    }

    if (!attrs.message) {
      errors.push({ detail: { message: 'empty' } });
    }

    if (errors.length > 0) {
      return new Response(400, {}, { errors });
    }

    return new Response(201, {}, {});
  });

  this.get('/hours.php', 'hour', { coalesce: true });
  this.post('/hours.php', 'hour');
  this.put('/hours.php', function({ hours }, request) {
    let id = request.queryParams.id;
    let attrs = this.normalizedRequestAttrs('hour');

    return hours.find(id).update(attrs);
  });
  this.del('/hours.php', function({ hours }, request) {
    let id = request.queryParams.id;

    hours.find(id).destroy();
  });

  this.get('/performances.php', 'performance', { coalesce: true });
  this.post('/performances.php', 'performance');
  this.put('/performances.php', function({ performances }, request) {
    let id = request.queryParams.id;
    let attrs = this.normalizedRequestAttrs('performance');

    return performances.find(id).update(attrs);
  });
  this.del('/performances.php', function({ performances }, request) {
    let id = request.queryParams.id;

    performances.find(id).destroy();
  });

  this.get('/packageBundles.php', 'package-bundle', { coalesce: true });
  this.post('/packageBundles.php', 'package-bundle');
  this.put('/packageBundles.php', function({ packageBundles }, request) {
    let id = request.queryParams.id;
    let attrs = this.normalizedRequestAttrs('package-bundle');

    return packageBundles.find(id).update(attrs);
  });
  this.del('/packageBundles.php', function({ packageBundles }, request) {
    let id = request.queryParams.id;

    packageBundles.find(id).destroy();
  });

  this.get('/deliItems.php', 'deli-item', { coalesce: true });
  this.post('/deliItems.php', 'deli-item');
  this.put('/deliItems.php', function({ deliItems }, request) {
    let id = request.queryParams.id;
    let attrs = this.normalizedRequestAttrs('deli-item');

    return deliItems.find(id).update(attrs);
  });
  this.del('/deliItems.php', function({ deliItems }, request) {
    let id = request.queryParams.id;

    deliItems.find(id).destroy();
  });
}
