<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    import { computePosition, offset, flip, shift } from '@floating-ui/dom';
    import { ref, onMounted, defineEmits } from 'vue';
    const referenceRef = ref();
    const floatingRef = ref();
    const isHidden = ref(true);
    const emit = defineEmits(['no', 'yes'])
    const props = defineProps({
      content: String,
      placement: {
        type: String,
        default: 'top',
      },
      click: {
        type: Boolean,
        default: false,
      },
      timeToHide: {
        type: Boolean,
        default: false,
      }
    });
    async function updateTootlip() {
      const postition = await computePosition(
        referenceRef.value,
        floatingRef.value,
        {
          placement: props.placement,
          middleware: [offset(8), flip(), shift({padding: 10})],
        }
      ).then(({ x, y, middlewareData, placement }) => {
        Object.assign(floatingRef.value.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
    onMounted(async () => {
      updateTootlip();
      console.log(props.click);
    });
    function show() {
      isHidden.value = false;
      updateTootlip();
    }
    function hide() {
      isHidden.value = true;
      updateTootlip();
      
    }
    function showAndHide() {
      show();
      if (props.timeToHide) {
        setTimeout(hide, 2000);
      }
      else {
        return;
      }
    }
    function answerNo(){
        hide()
        emit('no')
    }
    function answerYes(){
        hide()
        emit('yes')
    }
    </script>
    
    <template>
      <div class="inline-block">
        <div
          class="inline-block"
          ref="referenceRef"
          @mouseenter="!props.click && show()"
          @mouseleave="!props.click && hide()"
          @click="props.click && showAndHide()"
        >
          <slot></slot>
        </div>
        <div
          ref="floatingRef"
          :class="[
            'absolute px-4 py-3 rounded-xl top-0 left-0 bg-white text-rhino-900  ring-2 ring-rhino-100 z-10 font-base  transition ease duration-300 w-64',
            isHidden && 'hidden',
          ]"
        >
          {{ props.content }}
            <div class="flex justify-end w-full gap-2 mt-3">
                <button class=" rounded-lg  py-2 px-4 sm:py-2.5 sm:px-6 text-sm sm:text-base font-medium text-rhino-700 transition ease-out hover:bg-rhino-50  focus:outline-none focus:ring-2 focus:ring-rhino-300" @click="answerNo">??????</button>
                <button class=" rounded-lg bg-rhino-400 py-2 px-4 sm:py-2.5 sm:px-6 text-sm sm:text-base font-medium text-white transition ease-out hover:bg-rhino-600 focus:outline-none focus:ring-2 focus:ring-rhino-800" @click="answerYes">????</button>
            </div>
        </div>
      </div>
    </template>
    