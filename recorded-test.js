// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - http://ecommerce.test.k6.io/', function () {
    response = http.get('http://ecommerce.test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(4.6)

    response = http.get('http://ecommerce.test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(6.2)

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=add_to_cart',
      {
        product_id: '24',
        product_sku: 'woo-album',
        quantity: '1',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.test.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(10.1)
  })

  group('page_2 - http://ecommerce.test.k6.io/cart/', function () {
    response = http.get('http://ecommerce.test.k6.io/cart/', {
      headers: {
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(6.3)
  })

  group('page_3 - http://ecommerce.test.k6.io/checkout/', function () {
    response = http.get('http://ecommerce.test.k6.io/checkout/', {
      headers: {
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(1.3)

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=update_order_review',
      {
        address: '',
        address_2: '',
        city: '',
        country: 'US',
        has_full_address: 'false',
        payment_method: 'cod',
        post_data:
          'billing_first_name=&billing_last_name=&billing_company=&billing_country=US&billing_address_1=&billing_address_2=&billing_city=&billing_state=CO&billing_postcode=&billing_phone=&billing_email=&order_comments=&payment_method=cod&woocommerce-process-checkout-nonce=ed015bbbcd&_wp_http_referer=%2Fcheckout%2F',
        postcode: '',
        s_address: '',
        s_address_2: '',
        s_city: '',
        s_country: 'US',
        s_postcode: '',
        s_state: 'CO',
        security: 'abc0630bbf',
        state: 'CO',
      },
      {
        headers: {
          accept: '*/*',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.test.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(53)

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=update_order_review',
      {
        address: '123 Any Street',
        address_2: '',
        city: 'Fairfac',
        country: 'US',
        has_full_address: 'true',
        payment_method: 'cod',
        post_data:
          'billing_first_name=William&billing_last_name=Never&billing_company=Spike&billing_country=US&billing_address_1=123%20Any%20Street&billing_address_2=&billing_city=Fairfac&billing_state=CO&billing_postcode=201&billing_phone=&billing_email=&order_comments=&payment_method=cod&woocommerce-process-checkout-nonce=ed015bbbcd&_wp_http_referer=%2F%3Fwc-ajax%3Dupdate_order_review',
        postcode: '201',
        s_address: '123 Any Street',
        s_address_2: '',
        s_city: 'Fairfac',
        s_country: 'US',
        s_postcode: '201',
        s_state: 'CO',
        security: 'abc0630bbf',
        state: 'CO',
      },
      {
        headers: {
          accept: '*/*',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.test.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(2.9)

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=update_order_review',
      {
        address: '123 Any Street',
        address_2: '',
        city: 'Fairfac',
        country: 'US',
        has_full_address: 'true',
        payment_method: 'cod',
        post_data:
          'billing_first_name=William&billing_last_name=Never&billing_company=Spike&billing_country=US&billing_address_1=123%20Any%20Street&billing_address_2=&billing_city=Fairfac&billing_state=CO&billing_postcode=20149&billing_phone=&billing_email=&order_comments=&payment_method=cod&woocommerce-process-checkout-nonce=ed015bbbcd&_wp_http_referer=%2F%3Fwc-ajax%3Dupdate_order_review',
        postcode: '20149',
        s_address: '123 Any Street',
        s_address_2: '',
        s_city: 'Fairfac',
        s_country: 'US',
        s_postcode: '20149',
        s_state: 'CO',
        security: 'abc0630bbf',
        state: 'CO',
      },
      {
        headers: {
          accept: '*/*',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.test.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(12.6)

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=checkout',
      {
        _wp_http_referer: '/?wc-ajax=update_order_review',
        billing_address_1: '123 Any Street',
        billing_address_2: '',
        billing_city: 'Fairfac',
        billing_company: 'Spike',
        billing_country: 'US',
        billing_email: 'test@gmail.com',
        billing_first_name: 'William',
        billing_last_name: 'Never',
        billing_phone: '1234567890',
        billing_postcode: '20149',
        billing_state: 'CO',
        order_comments: '',
        payment_method: 'cod',
        'woocommerce-process-checkout-nonce': 'ed015bbbcd',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.test.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(4)
  })

  group(
    'page_4 - http://ecommerce.test.k6.io/checkout/order-received/29105/?key=wc_order_2g1vGTovCWASi',
    function () {
      response = http.get(
        'http://ecommerce.test.k6.io/checkout/order-received/29105/?key=wc_order_2g1vGTovCWASi',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
          },
        }
      )
      sleep(1.2)

      response = http.post(
        'http://ecommerce.test.k6.io/?wc-ajax=get_refreshed_fragments',
        {
          time: '1680643000058',
        },
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            origin: 'http://ecommerce.test.k6.io',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
          },
        }
      )
    }
  )
}