(defproject ewen/dragdrop "0.1.0-SNAPSHOT"
  :description "Drag and drop helpers"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [domina "1.0.2"]
                 [prismatic/schema "0.2.1-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [org.clojure/core.match "0.2.1"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :profiles {:dev {:dependencies [[com.cemerick/clojurescript.test "0.3.0-SNAPSHOT"]]}}

  :hooks [leiningen.cljsbuild]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/cljs/dragdrop.js"
                :output-dir "resources/cljs/"
                :optimizations :none
                :source-map true}}]})
